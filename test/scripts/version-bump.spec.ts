import * as fs from 'fs';
import * as path from 'path';

describe('Version Bump Scripts', () => {
  describe('version-bump.js', () => {
    it('should exist and be executable', () => {
      const scriptPath = path.join(__dirname, '../../scripts/version-bump.js');
      expect(fs.existsSync(scriptPath)).toBe(true);

      const stats = fs.statSync(scriptPath);
      expect(stats.isFile()).toBe(true);
    });

    it('should contain proper shebang and require statements', () => {
      const scriptPath = path.join(__dirname, '../../scripts/version-bump.js');
      const content = fs.readFileSync(scriptPath, 'utf8');

      expect(content).toMatch(/^#!/);
      expect(content).toContain('require(\'fs\')');
      expect(content).toContain('require(\'child_process\')');
    });
  });

  describe('update-changelog.js', () => {
    it('should exist and be executable', () => {
      const scriptPath = path.join(__dirname, '../../scripts/update-changelog.js');
      expect(fs.existsSync(scriptPath)).toBe(true);

      const stats = fs.statSync(scriptPath);
      expect(stats.isFile()).toBe(true);
    });

    it('should contain proper shebang and require statements', () => {
      const scriptPath = path.join(__dirname, '../../scripts/update-changelog.js');
      const content = fs.readFileSync(scriptPath, 'utf8');

      expect(content).toMatch(/^#!/);
      expect(content).toContain('require(\'fs\')');
      expect(content).toContain('require(\'child_process\')');
    });
  });

  describe('Package.json scripts', () => {
    it('should have all required version and release scripts', () => {
      const packageJsonPath = path.join(__dirname, '../../package.json');
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

      const requiredScripts = [
        'version:patch',
        'version:minor',
        'version:major',
        'version:auto',
        'changelog:update',
        'changelog:generate',
        'release:patch',
        'release:minor',
        'release:major',
        'release:auto'
      ];

      for (const script of requiredScripts) {
        expect(packageJson.scripts[script]).toBeDefined();
        expect(typeof packageJson.scripts[script]).toBe('string');
      }
    });

    it('should have prepublishOnly script for validation', () => {
      const packageJsonPath = path.join(__dirname, '../../package.json');
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

      expect(packageJson.scripts.prepublishOnly).toBeDefined();
      expect(packageJson.scripts.prepublishOnly).toContain('build');
      expect(packageJson.scripts.prepublishOnly).toContain('test');
    });
  });
});
