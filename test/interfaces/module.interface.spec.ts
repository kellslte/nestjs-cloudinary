import { CloudinaryModuleOptions, CloudinaryModuleAsyncOptions } from '../../src/interfaces';

describe('CloudinaryModuleOptions Interface', () => {
    it('should allow valid configuration options', () => {
        const validOptions: CloudinaryModuleOptions = {
            cloud_name: 'test_cloud',
            api_key: 'test_api_key',
            api_secret: 'test_api_secret',
            secure: true,
            private_cdn: false,
            cname: 'custom.domain.com',
            cdn_subdomain: true,
            secure_distribution: 'secure.domain.com',
            upload_preset: 'my_preset',
            timeout: 30000,
            retries: 3,
            retryDelay: 1000,
            maxRetryDelay: 10000,
        };

        expect(validOptions.cloud_name).toBe('test_cloud');
        expect(validOptions.api_key).toBe('test_api_key');
        expect(validOptions.api_secret).toBe('test_api_secret');
        expect(validOptions.secure).toBe(true);
        expect(validOptions.private_cdn).toBe(false);
        expect(validOptions.cname).toBe('custom.domain.com');
        expect(validOptions.cdn_subdomain).toBe(true);
        expect(validOptions.secure_distribution).toBe('secure.domain.com');
        expect(validOptions.upload_preset).toBe('my_preset');
        expect(validOptions.timeout).toBe(30000);
        expect(validOptions.retries).toBe(3);
        expect(validOptions.retryDelay).toBe(1000);
        expect(validOptions.maxRetryDelay).toBe(10000);
    });

    it('should allow minimal required configuration', () => {
        const minimalOptions: CloudinaryModuleOptions = {
            cloud_name: 'test_cloud',
            api_key: 'test_api_key',
            api_secret: 'test_api_secret',
        };

        expect(minimalOptions.cloud_name).toBe('test_cloud');
        expect(minimalOptions.api_key).toBe('test_api_key');
        expect(minimalOptions.api_secret).toBe('test_api_secret');
        expect(minimalOptions.secure).toBeUndefined();
    });

    it('should allow boolean values for secure options', () => {
        const secureOptions: CloudinaryModuleOptions = {
            cloud_name: 'test_cloud',
            api_key: 'test_api_key',
            api_secret: 'test_api_secret',
            secure: false,
            private_cdn: true,
            cdn_subdomain: false,
        };

        expect(secureOptions.secure).toBe(false);
        expect(secureOptions.private_cdn).toBe(true);
        expect(secureOptions.cdn_subdomain).toBe(false);
    });

    it('should allow numeric values for timeout and retry options', () => {
        const timeoutOptions: CloudinaryModuleOptions = {
            cloud_name: 'test_cloud',
            api_key: 'test_api_key',
            api_secret: 'test_api_secret',
            timeout: 60000,
            retries: 5,
            retryDelay: 2000,
            maxRetryDelay: 15000,
        };

        expect(timeoutOptions.timeout).toBe(60000);
        expect(timeoutOptions.retries).toBe(5);
        expect(timeoutOptions.retryDelay).toBe(2000);
        expect(timeoutOptions.maxRetryDelay).toBe(15000);
    });
});

describe('CloudinaryModuleAsyncOptions Interface', () => {
    it('should allow async configuration with useFactory', async () => {
        const asyncOptions: CloudinaryModuleAsyncOptions = {
            useFactory: () => ({
                cloud_name: 'async_cloud',
                api_key: 'async_key',
                api_secret: 'async_secret',
                secure: true,
            }),
        };

        const result = await asyncOptions.useFactory();
        expect(result.cloud_name).toBe('async_cloud');
        expect(result.api_key).toBe('async_key');
        expect(result.api_secret).toBe('async_secret');
        expect(result.secure).toBe(true);
    });

    it('should allow async configuration with imports and inject', () => {
        const asyncOptions: CloudinaryModuleAsyncOptions = {
            imports: ['ConfigModule'],
            useFactory: (config: any) => ({
                cloud_name: config.get('CLOUDINARY_CLOUD_NAME'),
                api_key: config.get('CLOUDINARY_API_KEY'),
                api_secret: config.get('CLOUDINARY_API_SECRET'),
            }),
            inject: ['ConfigService'],
        };

        expect(asyncOptions.imports).toEqual(['ConfigModule']);
        expect(asyncOptions.inject).toEqual(['ConfigService']);
    });

    it('should allow async configuration without imports and inject', () => {
        const asyncOptions: CloudinaryModuleAsyncOptions = {
            useFactory: () => ({
                cloud_name: 'simple_cloud',
                api_key: 'simple_key',
                api_secret: 'simple_secret',
            }),
        };

        expect(asyncOptions.imports).toBeUndefined();
        expect(asyncOptions.inject).toBeUndefined();
    });

    it('should allow async configuration that returns a Promise', async () => {
        const asyncOptions: CloudinaryModuleAsyncOptions = {
            useFactory: async () => {
                // Simulate async operation
                await new Promise(resolve => setTimeout(resolve, 1));
                return {
                    cloud_name: 'promise_cloud',
                    api_key: 'promise_key',
                    api_secret: 'promise_secret',
                };
            },
        };

        const result = await asyncOptions.useFactory();
        if (result && typeof result === 'object' && 'cloud_name' in result) {
            expect(result.cloud_name).toBe('promise_cloud');
            expect(result.api_key).toBe('promise_key');
            expect(result.api_secret).toBe('promise_secret');
        }
    });
});
