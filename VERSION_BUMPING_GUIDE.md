# Version Bumping Guide

This guide explains how to manage versions and releases for the @scwar/nestjs-cloudinary package.

## Conventional Commits

This project follows [Conventional Commits](https://www.conventionalcommits.org/) specification. This enables automatic version bumping and changelog generation.

### Commit Message Format

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Types

- **feat**: A new feature (triggers minor version bump)
- **fix**: A bug fix (triggers patch version bump)
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **chore**: Changes to the build process or auxiliary tools

### Breaking Changes

To indicate a breaking change, add `!` after the type or include `BREAKING CHANGE:` in the footer:

```
feat!: remove deprecated upload method
```

or

```
feat: add new authentication method

BREAKING CHANGE: The old auth method is no longer supported
```

## Version Bumping

### Automatic Version Bumping

The package includes scripts for automatic version bumping based on conventional commits:

```bash
# Automatically determine version bump type and update
npm run version:auto

# Manual version bumps
npm run version:patch  # 1.0.0 -> 1.0.1
npm run version:minor  # 1.0.0 -> 1.1.0
npm run version:major  # 1.0.0 -> 2.0.0
```

### What Happens During Version Bump

1. **Analyze commits**: Scans git history since last tag
2. **Determine bump type**: Based on conventional commit types
3. **Update package.json**: Increments version number
4. **Update CHANGELOG.md**: Adds new version entry with changes
5. **No git operations**: Version bump only updates files

### Bump Type Determination

- **Major (x.0.0)**: Breaking changes (`BREAKING CHANGE:` or `!`)
- **Minor (x.y.0)**: New features (`feat:`)
- **Patch (x.y.z)**: Bug fixes (`fix:`) or other changes

## Release Process

### Complete Release Workflow

```bash
# Full release with automatic version detection
npm run release:auto

# Manual release workflows
npm run release:patch  # For bug fixes
npm run release:minor  # For new features
npm run release:major  # For breaking changes
```

### What Happens During Release

1. **Version bump**: Updates version and changelog
2. **Build**: Compiles TypeScript to dist/
3. **Test**: Runs full test suite
4. **Git operations**:
   - Stages all changes
   - Commits with version message
   - Creates git tag (e.g., `v1.0.1`)

### Manual Release Steps

If you prefer manual control:

```bash
# 1. Update version and changelog
npm run version:patch

# 2. Build and test
npm run build
npm run test

# 3. Commit and tag manually
git add .
git commit -m "chore: bump version to $(node -p "require('./package.json').version")"
git tag "v$(node -p "require('./package.json').version")"

# 4. Push to repository
git push origin main
git push origin --tags

# 5. Publish to npm
npm publish
```

## Changelog Management

### Automatic Changelog Generation

The changelog is automatically updated during version bumps:

- **BREAKING CHANGES**: Listed first with ⚠ icon
- **Features**: New functionality with ✨ icon  
- **Bug Fixes**: Fixes with 🐛 icon
- **Other Changes**: Everything else with 🔧 icon

### Manual Changelog Updates

You can also update the changelog manually:

```bash
npm run changelog:update
```

### Changelog Format

The changelog follows [Keep a Changelog](https://keepachangelog.com/) format:

```markdown
## [1.1.0] - 2024-01-15

### ✨ Features
- feat: add new transformation options (abc123)

### 🐛 Bug Fixes  
- fix: resolve upload timeout issue (def456)

### 🔧 Other Changes
- docs: update README examples (ghi789)
```

## Pre-publish Validation

The package includes a `prepublishOnly` script that automatically:

1. **Builds** the package (`npm run build`)
2. **Tests** the package (`npm run test`)

This ensures only working code is published to npm.

## Best Practices

### Commit Messages

✅ **Good examples:**
```bash
git commit -m "feat: add video upload support"
git commit -m "fix: resolve timeout issues in large uploads"
git commit -m "docs: update API documentation"
git commit -m "feat!: remove deprecated methods"
```

❌ **Avoid:**
```bash
git commit -m "updates"
git commit -m "fixed stuff"
git commit -m "WIP"
```

### Release Workflow

1. **Develop**: Make changes with conventional commits
2. **Test**: Ensure all tests pass (`npm test`)
3. **Version**: Use automatic versioning (`npm run version:auto`)
4. **Review**: Check CHANGELOG.md for accuracy
5. **Release**: Use release scripts (`npm run release:auto`)
6. **Publish**: Push tags and publish to npm

### Version Strategy

- **Patch (1.0.x)**: Bug fixes, documentation, minor tweaks
- **Minor (1.x.0)**: New features, enhancements (backward compatible)
- **Major (x.0.0)**: Breaking changes, major rewrites

## Troubleshooting

### No Git Tags Found

If you get errors about no git tags, create an initial tag:

```bash
git tag v1.0.0
git push origin v1.0.0
```

### Changelog Not Updating

Ensure you have commits since the last tag and they follow conventional commit format.

### Build Failures

Check TypeScript compilation errors:

```bash
npm run build
npm run lint
```

### Test Failures

Run tests to identify issues:

```bash
npm run test
npm run test:cov  # With coverage
```

## Examples

### Bug Fix Release

```bash
# Make bug fix with conventional commit
git commit -m "fix: resolve upload timeout for large files"

# Automatic patch release
npm run release:auto
# Results in: 1.0.0 -> 1.0.1
```

### Feature Release

```bash
# Add new feature
git commit -m "feat: add video transformation support"

# Automatic minor release  
npm run release:auto
# Results in: 1.0.1 -> 1.1.0
```

### Breaking Change Release

```bash
# Breaking change
git commit -m "feat!: redesign upload API for better performance"

# Automatic major release
npm run release:auto
# Results in: 1.1.0 -> 2.0.0
```
