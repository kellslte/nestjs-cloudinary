# Release Checklist

Use this checklist to ensure consistent and reliable releases.

## Pre-Release Checklist

### Code Quality
- [ ] All tests are passing (`npm test`)
- [ ] Code is properly linted (`npm run lint`)
- [ ] Code is properly formatted (`npm run format`)
- [ ] TypeScript compiles without errors (`npm run build`)
- [ ] No console.log or debugging code left in source

### Documentation
- [ ] README.md is up to date
- [ ] API documentation reflects all changes
- [ ] Examples are working and current
- [ ] CHANGELOG.md has unreleased changes documented

### Version Management
- [ ] All commits follow conventional commit format
- [ ] Breaking changes are properly marked with `!` or `BREAKING CHANGE:`
- [ ] Version bump type is appropriate for changes made

## Release Process

### Automatic Release (Recommended)

```bash
# Run full automatic release
npm run release:auto
```

This will:
- [ ] Analyze commits and determine version bump
- [ ] Update package.json version
- [ ] Update CHANGELOG.md
- [ ] Build the package
- [ ] Run tests
- [ ] Create git commit and tag

### Manual Release

If you need more control:

```bash
# 1. Choose appropriate version bump
npm run version:patch   # for bug fixes
npm run version:minor   # for new features  
npm run version:major   # for breaking changes

# 2. Build and test
npm run build
npm run test

# 3. Commit and tag
git add .
git commit -m "chore: bump version to $(node -p "require('./package.json').version")"
git tag "v$(node -p "require('./package.json').version")"
```

## Post-Release Checklist

### Git Operations
- [ ] Changes are committed with proper message
- [ ] Git tag is created (format: `v1.2.3`)
- [ ] Push commits to repository (`git push origin main`)
- [ ] Push tags to repository (`git push origin --tags`)

### NPM Publishing
- [ ] Verify you're logged in to npm (`npm whoami`)
- [ ] Verify package builds correctly (`npm run build`)
- [ ] Publish to npm (`npm publish`)
- [ ] Verify package is available on npmjs.com

### Verification
- [ ] Test installation in a new project (`npm install @scwar/nestjs-cloudinary`)
- [ ] Verify package works as expected
- [ ] Check that examples in README work
- [ ] Verify TypeScript types are available

### Communication
- [ ] Update any dependent projects
- [ ] Notify team members of the release
- [ ] Post release notes if significant changes
- [ ] Update project documentation/wiki if needed

## Rollback Procedure

If issues are discovered after release:

### NPM Rollback
```bash
# Unpublish the problematic version (within 24 hours)
npm unpublish @scwar/nestjs-cloudinary@1.2.3

# Or deprecate the version
npm deprecate @scwar/nestjs-cloudinary@1.2.3 "Version has critical issues, use 1.2.2 instead"
```

### Git Rollback
```bash
# Remove the problematic tag
git tag -d v1.2.3
git push origin :refs/tags/v1.2.3

# Revert the version bump commit
git revert HEAD
```

### Quick Fix
```bash
# Make urgent fix
git commit -m "fix: critical issue in version 1.2.3"

# Release patch version immediately
npm run release:patch
```

## Version Bump Guidelines

### Patch (x.y.Z)
Use for:
- Bug fixes
- Documentation updates
- Dependency updates (non-breaking)
- Internal refactoring
- Performance improvements (non-breaking)

### Minor (x.Y.0)
Use for:
- New features (backward compatible)
- New optional parameters
- Deprecating features (but not removing)
- Dependencies with new features

### Major (X.0.0)
Use for:
- Breaking API changes
- Removing deprecated features
- Changing required parameters
- Major dependency updates with breaking changes
- Architectural changes

## Common Issues

### Build Fails
- Check TypeScript errors: `npm run build`
- Verify all dependencies are installed: `npm install`
- Check for linting errors: `npm run lint`

### Tests Fail
- Run tests locally: `npm test`
- Check for missing test cases
- Verify test environment setup

### Version Already Exists
- Check if tag already exists: `git tag -l`
- Use different version or delete existing tag
- Ensure you're on the correct branch

### NPM Publish Fails
- Verify npm authentication: `npm whoami`
- Check package name availability
- Ensure version doesn't already exist on npm

### Git Issues
- Ensure working directory is clean
- Check if you're on the correct branch
- Verify git remote is set correctly

## Emergency Release Process

For critical security fixes or major bugs:

1. **Create hotfix branch**
   ```bash
   git checkout -b hotfix/critical-fix
   ```

2. **Make minimal fix**
   ```bash
   git commit -m "fix: critical security vulnerability"
   ```

3. **Fast-track release**
   ```bash
   npm run version:patch
   npm run build
   npm test
   git checkout main
   git merge hotfix/critical-fix
   npm run release:patch
   ```

4. **Immediate publish**
   ```bash
   npm publish
   ```

5. **Notify users**
   - Update security advisory if needed
   - Notify through appropriate channels
   - Document the fix in CHANGELOG.md

## Success Criteria

A successful release should:
- [ ] Install cleanly in a new project
- [ ] Pass all automated tests
- [ ] Work with documented examples
- [ ] Maintain backward compatibility (unless major version)
- [ ] Include proper TypeScript definitions
- [ ] Have updated documentation
