#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

/**
 * Update changelog with new version and commit information
 */

// Get current package version
function getCurrentVersion() {
    const packageJsonPath = path.join(process.cwd(), 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    return packageJson.version;
}

// Get current date in YYYY-MM-DD format
function getCurrentDate() {
    return new Date().toISOString().split('T')[0];
}

// Get commits since last tag
function getCommitsSinceLastTag() {
    try {
        const lastTag = execSync('git describe --tags --abbrev=0', { encoding: 'utf8' }).trim();
        const commits = execSync(`git log ${lastTag}..HEAD --pretty=format:"%h %s"`, { encoding: 'utf8' });
        return commits.split('\n').filter(commit => commit.trim());
    } catch (error) {
        // No tags exist yet, get all commits
        try {
            const commits = execSync('git log --pretty=format:"%h %s"', { encoding: 'utf8' });
            return commits.split('\n').filter(commit => commit.trim());
        } catch (err) {
            return [];
        }
    }
}

// Parse commits into categories
function parseCommits(commits) {
    const categories = {
        breaking: [],
        features: [],
        fixes: [],
        others: []
    };

    for (const commit of commits) {
        const [hash, ...messageParts] = commit.split(' ');
        const message = messageParts.join(' ');

        if (message.includes('BREAKING CHANGE') || message.includes('!:')) {
            categories.breaking.push({ hash, message });
        } else if (message.startsWith('feat:') || message.startsWith('feat(')) {
            categories.features.push({ hash, message });
        } else if (message.startsWith('fix:') || message.startsWith('fix(')) {
            categories.fixes.push({ hash, message });
        } else {
            categories.others.push({ hash, message });
        }
    }

    return categories;
}

// Generate changelog entry
function generateChangelogEntry(version, date, categories) {
    let entry = `## [${version}] - ${date}\n\n`;

    if (categories.breaking.length > 0) {
        entry += '### ⚠ BREAKING CHANGES\n\n';
        for (const commit of categories.breaking) {
            entry += `- ${commit.message} (${commit.hash})\n`;
        }
        entry += '\n';
    }

    if (categories.features.length > 0) {
        entry += '### ✨ Features\n\n';
        for (const commit of categories.features) {
            entry += `- ${commit.message} (${commit.hash})\n`;
        }
        entry += '\n';
    }

    if (categories.fixes.length > 0) {
        entry += '### 🐛 Bug Fixes\n\n';
        for (const commit of categories.fixes) {
            entry += `- ${commit.message} (${commit.hash})\n`;
        }
        entry += '\n';
    }

    if (categories.others.length > 0) {
        entry += '### 🔧 Other Changes\n\n';
        for (const commit of categories.others) {
            entry += `- ${commit.message} (${commit.hash})\n`;
        }
        entry += '\n';
    }

    return entry;
}

// Update the changelog file
function updateChangelog(newEntry) {
    const changelogPath = path.join(process.cwd(), 'CHANGELOG.md');

    let changelogContent = '';
    if (fs.existsSync(changelogPath)) {
        changelogContent = fs.readFileSync(changelogPath, 'utf8');
    } else {
        // Create basic changelog structure if it doesn't exist
        changelogContent = `# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

`;
    }

    // Find the position to insert the new entry
    const unreleasedIndex = changelogContent.indexOf('## [Unreleased]');
    if (unreleasedIndex !== -1) {
        // Insert after the unreleased section
        const insertPosition = changelogContent.indexOf('\n', unreleasedIndex + 15) + 1;
        const beforeInsert = changelogContent.substring(0, insertPosition);
        const afterInsert = changelogContent.substring(insertPosition);

        changelogContent = beforeInsert + '\n' + newEntry + afterInsert;
    } else {
        // Append to the end if no unreleased section found
        changelogContent += '\n' + newEntry;
    }

    fs.writeFileSync(changelogPath, changelogContent);
    console.log(`📝 Updated CHANGELOG.md with new version entry`);
}

// Main execution
function main() {
    try {
        console.log('📝 Updating changelog...');

        const version = getCurrentVersion();
        const date = getCurrentDate();

        console.log(`Version: ${version}`);
        console.log(`Date: ${date}`);

        const commits = getCommitsSinceLastTag();
        console.log(`Found ${commits.length} commits to include`);

        if (commits.length === 0) {
            console.log('No new commits found, skipping changelog update');
            return;
        }

        const categories = parseCommits(commits);
        const changelogEntry = generateChangelogEntry(version, date, categories);

        updateChangelog(changelogEntry);

        console.log('✅ Changelog updated successfully');

    } catch (error) {
        console.error('❌ Error updating changelog:', error.message);
        process.exit(1);
    }
}

main();
