import {
    CloudinaryModule,
    CloudinaryService,
    CLOUDINARY_MODULE_OPTIONS,
    CLOUDINARY_CONFIG,
} from '../src/index';

// Import interfaces
import {
    CloudinaryModuleOptions,
    CloudinaryModuleAsyncOptions,
    CloudinaryUploadOptions,
    CloudinaryUploadResponse,
    CloudinaryTransformationOptions,
    CloudinaryTransformationResponse,
    CloudinaryDeleteOptions,
    CloudinaryDeleteResponse,
    CloudinaryResourceOptions,
    CloudinaryResourceResponse,
} from '../src/interfaces';

// Import types
import {
    CloudinaryResourceType,
    CloudinaryAccessMode,
    CloudinaryDeliveryType,
    CloudinaryTransformationCrop,
    CloudinaryTransformationGravity,
} from '../src/types';

describe('Main Index Exports', () => {
    describe('Module and Service Exports', () => {
        it('should export CloudinaryModule', () => {
            expect(CloudinaryModule).toBeDefined();
            expect(typeof CloudinaryModule).toBe('function');
        });

        it('should export CloudinaryService', () => {
            expect(CloudinaryService).toBeDefined();
            expect(typeof CloudinaryService).toBe('function');
        });
    });

    describe('Constants Exports', () => {
        it('should export CLOUDINARY_MODULE_OPTIONS', () => {
            expect(CLOUDINARY_MODULE_OPTIONS).toBeDefined();
            expect(CLOUDINARY_MODULE_OPTIONS).toBe('CLOUDINARY_MODULE_OPTIONS');
        });

        it('should export CLOUDINARY_CONFIG', () => {
            expect(CLOUDINARY_CONFIG).toBeDefined();
            expect(CLOUDINARY_CONFIG).toBe('CLOUDINARY_CONFIG');
        });
    });

    describe('Interface Exports', () => {
        it('should export CloudinaryModuleOptions', () => {
            // Interfaces are compile-time only, so we test they can be used in type annotations
            const _: CloudinaryModuleOptions = {
                cloud_name: 'test',
                api_key: 'test',
                api_secret: 'test'
            };
            expect(_.cloud_name).toBe('test');
        });

        it('should export CloudinaryModuleAsyncOptions', () => {
            const _: CloudinaryModuleAsyncOptions = {
                useFactory: () => ({ cloud_name: 'test', api_key: 'test', api_secret: 'test' })
            };
            expect(typeof _.useFactory).toBe('function');
        });

        it('should export CloudinaryUploadOptions', () => {
            const _: CloudinaryUploadOptions = { folder: 'test' };
            expect(_.folder).toBe('test');
        });

        it('should export CloudinaryUploadResponse', () => {
            // This is a complex interface, test it can be used in type annotations
            const _: Partial<CloudinaryUploadResponse> = { public_id: 'test' };
            expect(_.public_id).toBe('test');
        });

        it('should export CloudinaryTransformationOptions', () => {
            const _: CloudinaryTransformationOptions = { width: 100 };
            expect(_.width).toBe(100);
        });

        it('should export CloudinaryTransformationResponse', () => {
            // This is a complex interface, test it can be used in type annotations
            const _: Partial<CloudinaryTransformationResponse> = { url: 'test' };
            expect(_.url).toBe('test');
        });

        it('should export CloudinaryDeleteOptions', () => {
            const _: CloudinaryDeleteOptions = { resource_type: 'image' };
            expect(_.resource_type).toBe('image');
        });

        it('should export CloudinaryDeleteResponse', () => {
            // This is a complex interface, test it can be used in type annotations
            const _: Partial<CloudinaryDeleteResponse> = { deleted: {} };
            expect(_.deleted).toEqual({});
        });

        it('should export CloudinaryResourceOptions', () => {
            const _: CloudinaryResourceOptions = { resource_type: 'image' };
            expect(_.resource_type).toBe('image');
        });

        it('should export CloudinaryResourceResponse', () => {
            // This is a complex interface, test it can be used in type annotations
            const _: Partial<CloudinaryResourceResponse> = { resources: [] };
            expect(_.resources).toEqual([]);
        });
    });

    describe('Type Exports', () => {
        it('should export CloudinaryResourceType', () => {
            // Types are compile-time only, so we just test they can be imported
            const _: CloudinaryResourceType = 'image';
            expect(_).toBe('image');
        });

        it('should export CloudinaryAccessMode', () => {
            const _: CloudinaryAccessMode = 'public';
            expect(_).toBe('public');
        });

        it('should export CloudinaryDeliveryType', () => {
            const _: CloudinaryDeliveryType = 'upload';
            expect(_).toBe('upload');
        });

        it('should export CloudinaryTransformationCrop', () => {
            const _: CloudinaryTransformationCrop = 'scale';
            expect(_).toBe('scale');
        });

        it('should export CloudinaryTransformationGravity', () => {
            const _: CloudinaryTransformationGravity = 'center';
            expect(_).toBe('center');
        });
    });

    describe('Export Usage', () => {
        it('should allow creating module options', () => {
            const options: CloudinaryModuleOptions = {
                cloud_name: 'test_cloud',
                api_key: 'test_key',
                api_secret: 'test_secret',
                secure: true,
            };

            expect(options.cloud_name).toBe('test_cloud');
            expect(options.api_key).toBe('test_key');
            expect(options.api_secret).toBe('test_secret');
            expect(options.secure).toBe(true);
        });

        it('should allow creating async module options', () => {
            const asyncOptions: CloudinaryModuleAsyncOptions = {
                useFactory: () => ({
                    cloud_name: 'async_cloud',
                    api_key: 'async_key',
                    api_secret: 'async_secret',
                }),
            };

            const result = asyncOptions.useFactory();
            if (result && typeof result === 'object' && 'cloud_name' in result) {
                expect(result.cloud_name).toBe('async_cloud');
                expect(result.api_key).toBe('async_key');
                expect(result.api_secret).toBe('async_secret');
            }
        });

        it('should allow creating async module options with Promise', () => {
            const asyncOptions: CloudinaryModuleAsyncOptions = {
                useFactory: async () => ({
                    cloud_name: 'promise_cloud',
                    api_key: 'promise_key',
                    api_secret: 'promise_secret',
                }),
            };

            // Test the factory function directly
            const factory = asyncOptions.useFactory;
            expect(typeof factory).toBe('function');
        });

        it('should allow creating upload options', () => {
            const uploadOptions: CloudinaryUploadOptions = {
                folder: 'test_folder',
                resource_type: 'image',
                tags: ['test', 'image'],
            };

            expect(uploadOptions.folder).toBe('test_folder');
            expect(uploadOptions.resource_type).toBe('image');
            expect(uploadOptions.tags).toEqual(['test', 'image']);
        });

        it('should allow creating transformation options', () => {
            const transformOptions: CloudinaryTransformationOptions = {
                width: 800,
                height: 600,
                crop: 'fill',
                gravity: 'center',
            };

            expect(transformOptions.width).toBe(800);
            expect(transformOptions.height).toBe(600);
            expect(transformOptions.crop).toBe('fill');
            expect(transformOptions.gravity).toBe('center');
        });

        it('should allow using resource types', () => {
            const imageType: CloudinaryResourceType = 'image';
            const videoType: CloudinaryResourceType = 'video';

            expect(imageType).toBe('image');
            expect(videoType).toBe('video');
        });

        it('should allow using access modes', () => {
            const publicMode: CloudinaryAccessMode = 'public';
            const privateMode: CloudinaryAccessMode = 'private';

            expect(publicMode).toBe('public');
            expect(privateMode).toBe('private');
        });

        it('should allow using transformation crops', () => {
            const scaleCrop: CloudinaryTransformationCrop = 'scale';
            const fillCrop: CloudinaryTransformationCrop = 'fill';

            expect(scaleCrop).toBe('scale');
            expect(fillCrop).toBe('fill');
        });

        it('should allow using transformation gravities', () => {
            const centerGravity: CloudinaryTransformationGravity = 'center';
            const faceGravity: CloudinaryTransformationGravity = 'face';

            expect(centerGravity).toBe('center');
            expect(faceGravity).toBe('face');
        });
    });

    describe('Module Functionality', () => {
        it('should have forRoot static method', () => {
            expect(CloudinaryModule.forRoot).toBeDefined();
            expect(typeof CloudinaryModule.forRoot).toBe('function');
        });

        it('should have forRootAsync static method', () => {
            expect(CloudinaryModule.forRootAsync).toBeDefined();
            expect(typeof CloudinaryModule.forRootAsync).toBe('function');
        });
    });
});
