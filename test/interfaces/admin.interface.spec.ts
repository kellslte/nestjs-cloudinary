import { CloudinaryDeleteOptions, CloudinaryDeleteResponse, CloudinaryResourceOptions, CloudinaryResourceResponse } from '../../src/interfaces';

describe('CloudinaryDeleteOptions Interface', () => {
    it('should allow basic delete options', () => {
        const basicOptions: CloudinaryDeleteOptions = {
            resource_type: 'image',
            type: 'upload',
            invalidate: true,
            keep_original: false,
        };

        expect(basicOptions.resource_type).toBe('image');
        expect(basicOptions.type).toBe('upload');
        expect(basicOptions.invalidate).toBe(true);
        expect(basicOptions.keep_original).toBe(false);
    });

    it('should allow different resource types', () => {
        const videoOptions: CloudinaryDeleteOptions = {
            resource_type: 'video',
            type: 'private',
            invalidate: false,
        };

        expect(videoOptions.resource_type).toBe('video');
        expect(videoOptions.type).toBe('private');
        expect(videoOptions.invalidate).toBe(false);
    });

    it('should allow cursor-based pagination', () => {
        const paginationOptions: CloudinaryDeleteOptions = {
            resource_type: 'image',
            next_cursor: 'abc123def456',
        };

        expect(paginationOptions.next_cursor).toBe('abc123def456');
    });

    it('should allow all resource types', () => {
        const imageOptions: CloudinaryDeleteOptions = { resource_type: 'image' };
        const videoOptions: CloudinaryDeleteOptions = { resource_type: 'video' };
        const audioOptions: CloudinaryDeleteOptions = { resource_type: 'audio' };
        const rawOptions: CloudinaryDeleteOptions = { resource_type: 'raw' };

        expect(imageOptions.resource_type).toBe('image');
        expect(videoOptions.resource_type).toBe('video');
        expect(audioOptions.resource_type).toBe('audio');
        expect(rawOptions.resource_type).toBe('raw');
    });
});

describe('CloudinaryDeleteResponse Interface', () => {
    it('should allow basic delete response', () => {
        const basicResponse: CloudinaryDeleteResponse = {
            deleted: {
                'folder/image1': 'deleted',
                'folder/image2': 'deleted',
            },
            partial: false,
            deleted_counts: {
                'image': 2,
            },
        };

        expect(basicResponse.deleted).toEqual({
            'folder/image1': 'deleted',
            'folder/image2': 'deleted',
        });
        expect(basicResponse.partial).toBe(false);
        expect(basicResponse.deleted_counts).toEqual({ 'image': 2 });
    });

    it('should allow partial delete response', () => {
        const partialResponse: CloudinaryDeleteResponse = {
            deleted: {
                'folder/image1': 'deleted',
            },
            partial: true,
            deleted_counts: {
                'image': 1,
            },
            next_cursor: 'def456ghi789',
        };

        expect(partialResponse.partial).toBe(true);
        expect(partialResponse.next_cursor).toBe('def456ghi789');
    });

    it('should allow empty delete response', () => {
        const emptyResponse: CloudinaryDeleteResponse = {
            deleted: {},
            partial: false,
            deleted_counts: {},
        };

        expect(emptyResponse.deleted).toEqual({});
        expect(emptyResponse.deleted_counts).toEqual({});
    });

    it('should allow response with different resource types', () => {
        const mixedResponse: CloudinaryDeleteResponse = {
            deleted: {
                'folder/image1': 'deleted',
                'folder/video1': 'deleted',
            },
            partial: false,
            deleted_counts: {
                'image': 1,
                'video': 1,
            },
        };

        expect(mixedResponse.deleted_counts).toEqual({
            'image': 1,
            'video': 1,
        });
    });
});

describe('CloudinaryResourceOptions Interface', () => {
    it('should allow basic resource options', () => {
        const basicOptions: CloudinaryResourceOptions = {
            resource_type: 'image',
            type: 'upload',
            max_results: 20,
            tags: true,
            context: true,
        };

        expect(basicOptions.resource_type).toBe('image');
        expect(basicOptions.type).toBe('upload');
        expect(basicOptions.max_results).toBe(20);
        expect(basicOptions.tags).toBe(true);
        expect(basicOptions.context).toBe(true);
    });

    it('should allow pagination options', () => {
        const paginationOptions: CloudinaryResourceOptions = {
            resource_type: 'image',
            max_results: 50,
            next_cursor: 'abc123def456',
            start_at: '2024-01-01T00:00:00Z',
            direction: 'desc',
        };

        expect(paginationOptions.max_results).toBe(50);
        expect(paginationOptions.next_cursor).toBe('abc123def456');
        expect(paginationOptions.start_at).toBe('2024-01-01T00:00:00Z');
        expect(paginationOptions.direction).toBe('desc');
    });

    it('should allow field selection', () => {
        const fieldOptions: CloudinaryResourceOptions = {
            resource_type: 'image',
            fields: ['public_id', 'format', 'width', 'height', 'bytes'],
        };

        expect(fieldOptions.fields).toEqual(['public_id', 'format', 'width', 'height', 'bytes']);
    });

    it('should allow prefix filtering', () => {
        const prefixOptions: CloudinaryResourceOptions = {
            resource_type: 'image',
            prefix: 'products/',
            max_results: 10,
        };

        expect(prefixOptions.prefix).toBe('products/');
        expect(prefixOptions.max_results).toBe(10);
    });

    it('should allow different directions', () => {
        const ascOptions: CloudinaryResourceOptions = { direction: 'asc' };
        const descOptions: CloudinaryResourceOptions = { direction: 'desc' };

        expect(ascOptions.direction).toBe('asc');
        expect(descOptions.direction).toBe('desc');
    });

    it('should allow all resource types', () => {
        const imageOptions: CloudinaryResourceOptions = { resource_type: 'image' };
        const videoOptions: CloudinaryResourceOptions = { resource_type: 'video' };
        const audioOptions: CloudinaryResourceOptions = { resource_type: 'audio' };
        const rawOptions: CloudinaryResourceOptions = { resource_type: 'raw' };

        expect(imageOptions.resource_type).toBe('image');
        expect(videoOptions.resource_type).toBe('video');
        expect(audioOptions.resource_type).toBe('audio');
        expect(rawOptions.resource_type).toBe('raw');
    });
});

describe('CloudinaryResourceResponse Interface', () => {
    it('should allow basic resource response', () => {
        const basicResponse: CloudinaryResourceResponse = {
            resources: [
                {
                    public_id: 'folder/image1',
                    format: 'jpg',
                    version: 1234567890,
                    resource_type: 'image',
                    type: 'upload',
                    created_at: '2024-01-01T00:00:00Z',
                    bytes: 1024000,
                    width: 1920,
                    height: 1080,
                    backup: false,
                    access_mode: 'public',
                    url: 'http://res.cloudinary.com/cloud/image/upload/v123/folder/image1.jpg',
                    secure_url: 'https://res.cloudinary.com/cloud/image/upload/v123/folder/image1.jpg',
                    tags: ['tag1', 'tag2'],
                    context: { alt: 'Image description' },
                    metadata: { copyright: '2024' },
                    derived: [],
                    placeholder: false,
                },
            ],
            rate_limit_allowed: 1000,
            rate_limit_reset_at: '2024-01-01T01:00:00Z',
            rate_limit_remaining: 999,
        };

        expect(basicResponse.resources).toHaveLength(1);
        expect(basicResponse.resources[0].public_id).toBe('folder/image1');
        expect(basicResponse.resources[0].format).toBe('jpg');
        expect(basicResponse.resources[0].width).toBe(1920);
        expect(basicResponse.resources[0].height).toBe(1080);
        expect(basicResponse.rate_limit_allowed).toBe(1000);
        expect(basicResponse.rate_limit_remaining).toBe(999);
    });

    it('should allow response with eager transformations', () => {
        const eagerResponse: CloudinaryResourceResponse = {
            resources: [
                {
                    public_id: 'folder/image1',
                    format: 'jpg',
                    version: 1234567890,
                    resource_type: 'image',
                    type: 'upload',
                    created_at: '2024-01-01T00:00:00Z',
                    bytes: 1024000,
                    width: 1920,
                    height: 1080,
                    backup: false,
                    access_mode: 'public',
                    url: 'http://res.cloudinary.com/cloud/image/upload/v123/folder/image1.jpg',
                    secure_url: 'https://res.cloudinary.com/cloud/image/upload/v123/folder/image1.jpg',
                    tags: [],
                    context: {},
                    metadata: {},
                    derived: [],
                    placeholder: false,
                    eager: [
                        {
                            transformation: 'w_300,h_300,c_thumb',
                            width: 300,
                            height: 300,
                            bytes: 50000,
                            format: 'jpg',
                            url: 'http://res.cloudinary.com/cloud/image/upload/w_300,h_300,c_thumb/v123/folder/image1.jpg',
                            secure_url: 'https://res.cloudinary.com/cloud/image/upload/w_300,h_300,c_thumb/v123/folder/image1.jpg',
                        },
                    ],
                },
            ],
            rate_limit_allowed: 1000,
            rate_limit_reset_at: '2024-01-01T01:00:00Z',
            rate_limit_remaining: 999,
        };

        expect(eagerResponse.resources[0].eager).toBeDefined();
        expect(eagerResponse.resources[0].eager![0].transformation).toBe('w_300,h_300,c_thumb');
        expect(eagerResponse.resources[0].eager![0].width).toBe(300);
    });

    it('should allow response with video metadata', () => {
        const videoResponse: CloudinaryResourceResponse = {
            resources: [
                {
                    public_id: 'folder/video1',
                    format: 'mp4',
                    version: 1234567890,
                    resource_type: 'video',
                    type: 'upload',
                    created_at: '2024-01-01T00:00:00Z',
                    bytes: 50000000,
                    width: 1920,
                    height: 1080,
                    backup: false,
                    access_mode: 'public',
                    url: 'http://res.cloudinary.com/cloud/video/upload/v123/folder/video1.mp4',
                    secure_url: 'https://res.cloudinary.com/cloud/video/upload/v123/folder/video1.mp4',
                    tags: [],
                    context: {},
                    metadata: {},
                    derived: [],
                    placeholder: false,
                    duration: 120.5,
                    bit_rate: 4000000,
                    frame_rate: 30,
                    start_time: 0,
                    rotation: 0,
                    is_audio: false,
                },
            ],
            rate_limit_allowed: 1000,
            rate_limit_reset_at: '2024-01-01T01:00:00Z',
            rate_limit_remaining: 999,
        };

        expect(videoResponse.resources[0].duration).toBe(120.5);
        expect(videoResponse.resources[0].bit_rate).toBe(4000000);
        expect(videoResponse.resources[0].frame_rate).toBe(30);
        expect(videoResponse.resources[0].is_audio).toBe(false);
    });

    it('should allow response with face detection', () => {
        const faceResponse: CloudinaryResourceResponse = {
            resources: [
                {
                    public_id: 'folder/face_image',
                    format: 'jpg',
                    version: 1234567890,
                    resource_type: 'image',
                    type: 'upload',
                    created_at: '2024-01-01T00:00:00Z',
                    bytes: 500000,
                    width: 800,
                    height: 600,
                    backup: false,
                    access_mode: 'public',
                    url: 'http://res.cloudinary.com/cloud/image/upload/v123/folder/face_image.jpg',
                    secure_url: 'https://res.cloudinary.com/cloud/image/upload/v123/folder/face_image.jpg',
                    tags: [],
                    context: {},
                    metadata: {},
                    derived: [],
                    placeholder: false,
                    faces: [[100, 100, 200, 200]],
                    coordinates: { faces: [[100, 100, 200, 200]] },
                },
            ],
            rate_limit_allowed: 1000,
            rate_limit_reset_at: '2024-01-01T01:00:00Z',
            rate_limit_remaining: 999,
        };

        expect(faceResponse.resources[0].faces).toEqual([[100, 100, 200, 200]]);
        expect(faceResponse.resources[0].coordinates).toBeDefined();
    });

    it('should allow response with pagination', () => {
        const paginatedResponse: CloudinaryResourceResponse = {
            resources: [],
            next_cursor: 'def456ghi789',
            rate_limit_allowed: 1000,
            rate_limit_reset_at: '2024-01-01T01:00:00Z',
            rate_limit_remaining: 999,
        };

        expect(paginatedResponse.next_cursor).toBe('def456ghi789');
        expect(paginatedResponse.resources).toHaveLength(0);
    });

    it('should allow response with rate limiting info', () => {
        const rateLimitResponse: CloudinaryResourceResponse = {
            resources: [],
            rate_limit_allowed: 5000,
            rate_limit_reset_at: '2024-01-01T02:00:00Z',
            rate_limit_remaining: 4999,
        };

        expect(rateLimitResponse.rate_limit_allowed).toBe(5000);
        expect(rateLimitResponse.rate_limit_reset_at).toBe('2024-01-01T02:00:00Z');
        expect(rateLimitResponse.rate_limit_remaining).toBe(4999);
    });
});
