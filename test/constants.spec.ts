import { CLOUDINARY_MODULE_OPTIONS, CLOUDINARY_CONFIG } from '../src/constants';

describe('Cloudinary Constants', () => {
    describe('CLOUDINARY_MODULE_OPTIONS', () => {
        it('should be defined', () => {
            expect(CLOUDINARY_MODULE_OPTIONS).toBeDefined();
        });

        it('should have the correct value', () => {
            expect(CLOUDINARY_MODULE_OPTIONS).toBe('CLOUDINARY_MODULE_OPTIONS');
        });

        it('should be a string', () => {
            expect(typeof CLOUDINARY_MODULE_OPTIONS).toBe('string');
        });

        it('should not be empty', () => {
            expect(CLOUDINARY_MODULE_OPTIONS.length).toBeGreaterThan(0);
        });
    });

    describe('CLOUDINARY_CONFIG', () => {
        it('should be defined', () => {
            expect(CLOUDINARY_CONFIG).toBeDefined();
        });

        it('should have the correct value', () => {
            expect(CLOUDINARY_CONFIG).toBe('CLOUDINARY_CONFIG');
        });

        it('should be a string', () => {
            expect(typeof CLOUDINARY_CONFIG).toBe('string');
        });

        it('should not be empty', () => {
            expect(CLOUDINARY_CONFIG.length).toBeGreaterThan(0);
        });
    });

    describe('Constants Usage', () => {
        it('should be usable as injection tokens', () => {
            const mockProvider = {
                provide: CLOUDINARY_MODULE_OPTIONS,
                useValue: {
                    cloud_name: 'test_cloud',
                    api_key: 'test_key',
                    api_secret: 'test_secret',
                },
            };

            const mockConfigProvider = {
                provide: CLOUDINARY_CONFIG,
                useValue: {
                    cloud_name: 'config_cloud',
                    api_key: 'config_key',
                    api_secret: 'config_secret',
                },
            };

            expect(mockProvider.provide).toBe('CLOUDINARY_MODULE_OPTIONS');
            expect(mockConfigProvider.provide).toBe('CLOUDINARY_CONFIG');
            expect(mockProvider.useValue.cloud_name).toBe('test_cloud');
            expect(mockConfigProvider.useValue.cloud_name).toBe('config_cloud');
        });

        it('should be unique values', () => {
            expect(CLOUDINARY_MODULE_OPTIONS).not.toBe(CLOUDINARY_CONFIG);
        });

        it('should follow naming convention', () => {
            expect(CLOUDINARY_MODULE_OPTIONS).toMatch(/^[A-Z_]+$/);
            expect(CLOUDINARY_CONFIG).toMatch(/^[A-Z_]+$/);
        });
    });

    describe('Constants in Module Context', () => {
        it('should be importable in modules', () => {
            // This test ensures the constants can be imported and used
            const moduleOptions = {
                provide: CLOUDINARY_MODULE_OPTIONS,
                useValue: {
                    cloud_name: 'import_test',
                    api_key: 'import_key',
                    api_secret: 'import_secret',
                },
            };

            expect(moduleOptions.provide).toBe('CLOUDINARY_MODULE_OPTIONS');
            expect(moduleOptions.useValue.cloud_name).toBe('import_test');
        });

        it('should be usable in dependency injection', () => {
            const providers = [
                {
                    provide: CLOUDINARY_MODULE_OPTIONS,
                    useValue: { cloud_name: 'di_test', api_key: 'di_key', api_secret: 'di_secret' },
                },
                {
                    provide: CLOUDINARY_CONFIG,
                    useValue: { cloud_name: 'di_config', api_key: 'di_config_key', api_secret: 'di_config_secret' },
                },
            ];

            expect(providers).toHaveLength(2);
            expect(providers[0].provide).toBe('CLOUDINARY_MODULE_OPTIONS');
            expect(providers[1].provide).toBe('CLOUDINARY_CONFIG');
        });
    });
});
