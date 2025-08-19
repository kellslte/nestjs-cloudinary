import { CloudinaryUploadOptions, CloudinaryUploadResponse } from '../../src/interfaces';

describe('CloudinaryUploadOptions Interface', () => {
    it('should allow basic upload options', () => {
        const basicOptions: CloudinaryUploadOptions = {
            public_id: 'my_image',
            folder: 'products',
            resource_type: 'image',
            format: 'jpg',
            tags: ['product', 'featured'],
        };

        expect(basicOptions.public_id).toBe('my_image');
        expect(basicOptions.folder).toBe('products');
        expect(basicOptions.resource_type).toBe('image');
        expect(basicOptions.format).toBe('jpg');
        expect(basicOptions.tags).toEqual(['product', 'featured']);
    });

    it('should allow transformation options', () => {
        const transformOptions: CloudinaryUploadOptions = {
            transformation: { width: 800, height: 600, crop: 'fill' },
            eager: { width: 300, height: 300, crop: 'thumb' },
            eager_async: true,
            eager_notification_url: 'https://webhook.site/notify',
        };

        expect(transformOptions.transformation).toEqual({ width: 800, height: 600, crop: 'fill' });
        expect(transformOptions.eager).toEqual({ width: 300, height: 300, crop: 'thumb' });
        expect(transformOptions.eager_async).toBe(true);
        expect(transformOptions.eager_notification_url).toBe('https://webhook.site/notify');
    });

    it('should allow resource type options', () => {
        const resourceTypeOptions: CloudinaryUploadOptions = {
            resource_type: 'video',
            format: 'mp4',
        };

        expect(resourceTypeOptions.resource_type).toBe('video');
        expect(resourceTypeOptions.format).toBe('mp4');
    });

    it('should allow quality and optimization options', () => {
        const qualityOptions: CloudinaryUploadOptions = {
            quality: 80,
            quality_auto: 'good',

            responsive: true,
            responsive_breakpoints: {
                create_derived: true,
                bytes_step: 20000,
                min_width: 200,
                max_width: 1000,
            },
        };

        expect(qualityOptions.quality).toBe(80);
        expect(qualityOptions.quality_auto).toBe('good');

        expect(qualityOptions.responsive).toBe(true);
        expect(qualityOptions.responsive_breakpoints).toBeDefined();
    });

    it('should allow AI and analysis options', () => {
        const aiOptions: CloudinaryUploadOptions = {
            detection: 'adv_face',
            similarity_search: 'true',
            ocr: 'adv_ocr',
            accessibility_analysis: true,
            visual_search: true,
        };

        expect(aiOptions.detection).toBe('adv_face');
        expect(aiOptions.similarity_search).toBe('true');
        expect(aiOptions.ocr).toBe('adv_ocr');
        expect(aiOptions.accessibility_analysis).toBe(true);
        expect(aiOptions.visual_search).toBe(true);
    });

    it('should allow access control options', () => {
        const accessOptions: CloudinaryUploadOptions = {
            access_mode: 'authenticated',
            type: 'private',
            access_control: [
                {
                    access_type: 'token',
                    start: '2024-01-01',
                    end: '2024-12-31',
                },
            ],
            overwrite: false,
            unique_filename: true,
            use_filename: true,
        };

        expect(accessOptions.access_mode).toBe('authenticated');
        expect(accessOptions.type).toBe('private');
        expect(accessOptions.access_control).toBeDefined();
        expect(accessOptions.overwrite).toBe(false);
        expect(accessOptions.unique_filename).toBe(true);
        expect(accessOptions.use_filename).toBe(true);
    });
});

describe('CloudinaryUploadResponse Interface', () => {
    it('should allow basic response structure', () => {
        const basicResponse: CloudinaryUploadResponse = {
            public_id: 'folder/image_name',
            version: 1234567890,
            width: 1920,
            height: 1080,
            format: 'jpg',
            created_at: '2024-01-01T00:00:00Z',
            resource_type: 'image',
            tags: ['tag1', 'tag2'],
            bytes: 1024000,
            type: 'upload',
            etag: 'abc123',
            url: 'http://res.cloudinary.com/cloud/image/upload/v123/folder/image_name.jpg',
            secure_url: 'https://res.cloudinary.com/cloud/image/upload/v123/folder/image_name.jpg',
            signature: 'def456',
            original_filename: 'image.jpg',
            placeholder: false,
            access_mode: 'public',
            context: {},
            pages: 1,
            moderation: [],
            access_control: [],
            metadata: {},
        };

        expect(basicResponse.public_id).toBe('folder/image_name');
        expect(basicResponse.version).toBe(1234567890);
        expect(basicResponse.width).toBe(1920);
        expect(basicResponse.height).toBe(1080);
        expect(basicResponse.format).toBe('jpg');
        expect(basicResponse.resource_type).toBe('image');
        expect(basicResponse.bytes).toBe(1024000);
        expect(basicResponse.type).toBe('upload');
    });

    it('should allow response with eager transformations', () => {
        const eagerResponse: CloudinaryUploadResponse = {
            public_id: 'folder/image_name',
            version: 1234567890,
            width: 1920,
            height: 1080,
            format: 'jpg',
            created_at: '2024-01-01T00:00:00Z',
            resource_type: 'image',
            tags: [],
            bytes: 1024000,
            type: 'upload',
            etag: 'abc123',
            url: 'http://res.cloudinary.com/cloud/image/upload/v123/folder/image_name.jpg',
            secure_url: 'https://res.cloudinary.com/cloud/image/upload/v123/folder/image_name.jpg',
            signature: 'def456',
            original_filename: 'image.jpg',
            placeholder: false,
            access_mode: 'public',
            context: {},
            pages: 1,
            moderation: [],
            access_control: [],
            metadata: {},
            eager: [
                {
                    transformation: 'w_300,h_300,c_thumb',
                    width: 300,
                    height: 300,
                    bytes: 50000,
                    format: 'jpg',
                    url: 'http://res.cloudinary.com/cloud/image/upload/w_300,h_300,c_thumb/v123/folder/image_name.jpg',
                    secure_url: 'https://res.cloudinary.com/cloud/image/upload/w_300,h_300,c_thumb/v123/folder/image_name.jpg',
                },
            ],
        };

        expect(eagerResponse.eager).toBeDefined();
        expect(eagerResponse.eager![0].transformation).toBe('w_300,h_300,c_thumb');
        expect(eagerResponse.eager![0].width).toBe(300);
        expect(eagerResponse.eager![0].height).toBe(300);
    });

    it('should allow response with video metadata', () => {
        const videoResponse: CloudinaryUploadResponse = {
            public_id: 'folder/video_name',
            version: 1234567890,
            width: 1920,
            height: 1080,
            format: 'mp4',
            created_at: '2024-01-01T00:00:00Z',
            resource_type: 'video',
            tags: [],
            bytes: 50000000,
            type: 'upload',
            etag: 'abc123',
            url: 'http://res.cloudinary.com/cloud/video/upload/v123/folder/video_name.mp4',
            secure_url: 'https://res.cloudinary.com/cloud/video/upload/v123/folder/video_name.mp4',
            signature: 'def456',
            original_filename: 'video.mp4',
            placeholder: false,
            access_mode: 'public',
            context: {},
            pages: 1,
            duration: 120.5,
            bit_rate: 4000000,
            frame_rate: 30,
            start_time: 0,
            rotation: 0,
            is_audio: false,
            moderation: [],
            access_control: [],
            metadata: {},
        };

        expect(videoResponse.duration).toBe(120.5);
        expect(videoResponse.bit_rate).toBe(4000000);
        expect(videoResponse.frame_rate).toBe(30);
        expect(videoResponse.is_audio).toBe(false);
    });

    it('should allow response with face detection', () => {
        const faceResponse: CloudinaryUploadResponse = {
            public_id: 'folder/face_image',
            version: 1234567890,
            width: 800,
            height: 600,
            format: 'jpg',
            created_at: '2024-01-01T00:00:00Z',
            resource_type: 'image',
            tags: [],
            bytes: 500000,
            type: 'upload',
            etag: 'abc123',
            url: 'http://res.cloudinary.com/cloud/image/upload/v123/folder/face_image.jpg',
            secure_url: 'https://res.cloudinary.com/cloud/image/upload/v123/folder/face_image.jpg',
            signature: 'def456',
            original_filename: 'face_image.jpg',
            placeholder: false,
            access_mode: 'public',
            context: {},
            pages: 1,
            faces: [[100, 100, 200, 200]],
            coordinates: { faces: [[100, 100, 200, 200]] },
            moderation: [],
            access_control: [],
            metadata: {},
        };

        expect(faceResponse.faces).toEqual([[100, 100, 200, 200]]);
        expect(faceResponse.coordinates).toBeDefined();
    });

    it('should allow response with moderation', () => {
        const moderationResponse: CloudinaryUploadResponse = {
            public_id: 'folder/moderation_image',
            version: 1234567890,
            width: 800,
            height: 600,
            format: 'jpg',
            created_at: '2024-01-01T00:00:00Z',
            resource_type: 'image',
            tags: [],
            bytes: 500000,
            type: 'upload',
            etag: 'abc123',
            url: 'http://res.cloudinary.com/cloud/image/upload/v123/folder/moderation_image.jpg',
            secure_url: 'https://res.cloudinary.com/cloud/image/upload/v123/folder/moderation_image.jpg',
            signature: 'def456',
            original_filename: 'moderation_image.jpg',
            placeholder: false,
            access_mode: 'public',
            context: {},
            pages: 1,
            moderation: ['approved'],
            access_control: [],
            metadata: {},
        };

        expect(moderationResponse.moderation).toBeDefined();
        expect(moderationResponse.moderation[0]).toBe('approved');
    });
});
