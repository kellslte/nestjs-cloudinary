#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

/**
 * Automatic version bumping script based on conventional commits
 */

// Get git commit messages since last tag
function getCommitsSinceLastTag() {
    try {
        const lastTag = execSync('git describe --tags --abbrev=0', { encoding: 'utf8' }).trim();
        const commits = execSync(`git log ${lastTag}..HEAD --pretty=format:"%s"`, { encoding: 'utf8' });
        return commits.split('\n').filter(commit => commit.trim());
    } catch (error) {
        // No tags exist yet, get all commits
        try {
            const commits = execSync('git log --pretty=format:"%s"', { encoding: 'utf8' });
            return commits.split('\n').filter(commit => commit.trim());
        } catch (err) {
            console.log('No git commits found, defaulting to patch version bump');
            return [];
        }
    }
}

// Determine version bump type based on conventional commits
function determineVersionBump(commits) {
    let hasBreaking = false;
    let hasFeature = false;
    let hasFix = false;

    for (const commit of commits) {
        // Check for breaking changes
        if (commit.includes('BREAKING CHANGE') || commit.includes('!:')) {
            hasBreaking = true;
            break;
        }

        // Check for features
        if (commit.startsWith('feat:') || commit.startsWith('feat(')) {
            hasFeature = true;
        }

        // Check for fixes
        if (commit.startsWith('fix:') || commit.startsWith('fix(')) {
            hasFix = true;
        }
    }

    if (hasBreaking) {
        return 'major';
    } else if (hasFeature) {
        return 'minor';
    } else if (hasFix) {
        return 'patch';
    } else {
        // Default to patch for any other changes
        return 'patch';
    }
}

// Update package.json version
function updateVersion(bumpType) {
    const packageJsonPath = path.join(process.cwd(), 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

    const currentVersion = packageJson.version;
    const [major, minor, patch] = currentVersion.split('.').map(Number);

    let newVersion;
    switch (bumpType) {
        case 'major':
            newVersion = `${major + 1}.0.0`;
            break;
        case 'minor':
            newVersion = `${major}.${minor + 1}.0`;
            break;
        case 'patch':
        default:
            newVersion = `${major}.${minor}.${patch + 1}`;
            break;
    }

    packageJson.version = newVersion;
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');

    console.log(`Version bumped from ${currentVersion} to ${newVersion} (${bumpType})`);
    return newVersion;
}

// Main execution
function main() {
    try {
        console.log('🔍 Analyzing commits for automatic version bumping...');

        const commits = getCommitsSinceLastTag();
        console.log(`Found ${commits.length} commits since last tag`);

        if (commits.length === 0) {
            console.log('No commits found, skipping version bump');
            return;
        }

        const bumpType = determineVersionBump(commits);
        console.log(`📈 Determined bump type: ${bumpType}`);

        const newVersion = updateVersion(bumpType);

        // Update changelog
        console.log('📝 Updating changelog...');
        execSync('npm run changelog:update', { stdio: 'inherit' });

        console.log(`✅ Successfully bumped version to ${newVersion}`);

    } catch (error) {
        console.error('❌ Error during version bump:', error.message);
        process.exit(1);
    }
}

main();
