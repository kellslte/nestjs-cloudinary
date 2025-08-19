import { CloudinaryTransformationOptions, CloudinaryTransformationResponse } from '../../src/interfaces';

describe('CloudinaryTransformationOptions Interface', () => {
    it('should allow basic transformation options', () => {
        const basicOptions: CloudinaryTransformationOptions = {
            width: 800,
            height: 600,
            crop: 'fill',
            gravity: 'center',
            quality: 80,
            format: 'jpg',
        };

        expect(basicOptions.width).toBe(800);
        expect(basicOptions.height).toBe(600);
        expect(basicOptions.crop).toBe('fill');
        expect(basicOptions.gravity).toBe('center');
        expect(basicOptions.quality).toBe(80);
        expect(basicOptions.format).toBe('jpg');
    });

    it('should allow string and number values for dimensions', () => {
        const dimensionOptions: CloudinaryTransformationOptions = {
            width: 'auto',
            height: 'auto',
            aspect_ratio: '16:9',
            crop: 'scale',
        };

        expect(dimensionOptions.width).toBe('auto');
        expect(dimensionOptions.height).toBe('auto');
        expect(dimensionOptions.aspect_ratio).toBe('16:9');
        expect(dimensionOptions.crop).toBe('scale');
    });

    it('should allow effects and filters', () => {
        const effectOptions: CloudinaryTransformationOptions = {
            effect: 'blur:1000',
            opacity: 0.8,
            border: '5px_solid_red',
            background: 'blue',
            radius: 20,
            angle: 45,
        };

        expect(effectOptions.effect).toBe('blur:1000');
        expect(effectOptions.opacity).toBe(0.8);
        expect(effectOptions.border).toBe('5px_solid_red');
        expect(effectOptions.background).toBe('blue');
        expect(effectOptions.radius).toBe(20);
        expect(effectOptions.angle).toBe(45);
    });

    it('should allow overlay and underlay options', () => {
        const overlayOptions: CloudinaryTransformationOptions = {
            overlay: 'logo',
            underlay: 'watermark',
            x: 10,
            y: 20,
            zoom: 1.5,
        };

        expect(overlayOptions.overlay).toBe('logo');
        expect(overlayOptions.underlay).toBe('watermark');
        expect(overlayOptions.x).toBe(10);
        expect(overlayOptions.y).toBe(20);
        expect(overlayOptions.zoom).toBe(1.5);
    });

    it('should allow video-specific options', () => {
        const videoOptions: CloudinaryTransformationOptions = {
            video_codec: 'h264',
            audio_codec: 'aac',
            bit_rate: 1000000,
            audio_bit_rate: 128000,
            fps: 30,
            keyframe_interval: 60,
            streaming_profile: 'hd',
            video_sampling: 60,
            duration: 120,
            start_offset: 10,
            end_offset: 110,
        };

        expect(videoOptions.video_codec).toBe('h264');
        expect(videoOptions.audio_codec).toBe('aac');
        expect(videoOptions.bit_rate).toBe(1000000);
        expect(videoOptions.audio_bit_rate).toBe(128000);
        expect(videoOptions.fps).toBe(30);
        expect(videoOptions.keyframe_interval).toBe(60);
        expect(videoOptions.streaming_profile).toBe('hd');
        expect(videoOptions.video_sampling).toBe(60);
        expect(videoOptions.duration).toBe(120);
        expect(videoOptions.start_offset).toBe(10);
        expect(videoOptions.end_offset).toBe(110);
    });

    it('should allow color and format options', () => {
        const colorOptions: CloudinaryTransformationOptions = {
            color: 'red',
            color_space: 'srgb',
            fetch_format: 'auto',
            density: 300,
            page: 1,
            offset: 10,
        };

        expect(colorOptions.color).toBe('red');
        expect(colorOptions.color_space).toBe('srgb');
        expect(colorOptions.fetch_format).toBe('auto');
        expect(colorOptions.density).toBe(300);
        expect(colorOptions.page).toBe(1);
        expect(colorOptions.offset).toBe(10);
    });

    it('should allow flags and advanced options', () => {
        const flagOptions: CloudinaryTransformationOptions = {
            flags: 'attachment',
            dpr: 'auto',
        };

        expect(flagOptions.flags).toBe('attachment');
        expect(flagOptions.dpr).toBe('auto');
    });

    it('should allow shorthand transformation options', () => {
        const shorthandOptions: CloudinaryTransformationOptions = {
            w: 800,
            h: 600,
            c: 'fill',
            g: 'face',
            q: 80,
            f: 'auto',
            r: 20,
            a: 45,
            e: 'blur:1000',
            o: 0.8,
            bo: '5px_solid_red',
            b: 'blue',
            l: 'logo',

            z: 1.5,
            ar: '16:9',
            co: 'red',

            dn: 300,
            pg: 1,
            of: 10,
            du: 120,
            vc: 'h264',
            ac: 'aac',
            br: 1000000,
            ab: 128000,
            ki: 60,
            sp: 'hd',
        };

        expect(shorthandOptions.w).toBe(800);
        expect(shorthandOptions.h).toBe(600);
        expect(shorthandOptions.c).toBe('fill');
        expect(shorthandOptions.g).toBe('face');
        expect(shorthandOptions.q).toBe(80);
        expect(shorthandOptions.f).toBe('auto');
        expect(shorthandOptions.r).toBe(20);
        expect(shorthandOptions.a).toBe(45);
        expect(shorthandOptions.e).toBe('blur:1000');
        expect(shorthandOptions.o).toBe(0.8);
        expect(shorthandOptions.bo).toBe('5px_solid_red');
        expect(shorthandOptions.b).toBe('blue');
        expect(shorthandOptions.l).toBe('logo');

        expect(shorthandOptions.z).toBe(1.5);
        expect(shorthandOptions.ar).toBe('16:9');
        expect(shorthandOptions.co).toBe('red');

        expect(shorthandOptions.dn).toBe(300);
        expect(shorthandOptions.pg).toBe(1);
        expect(shorthandOptions.of).toBe(10);
        expect(shorthandOptions.du).toBe(120);
        expect(shorthandOptions.vc).toBe('h264');
        expect(shorthandOptions.ac).toBe('aac');
        expect(shorthandOptions.br).toBe(1000000);
        expect(shorthandOptions.ab).toBe(128000);
        expect(shorthandOptions.ki).toBe(60);
        expect(shorthandOptions.sp).toBe('hd');
    });
});

describe('CloudinaryTransformationResponse Interface', () => {
    it('should allow basic transformation response', () => {
        const basicResponse: CloudinaryTransformationResponse = {
            url: 'http://res.cloudinary.com/cloud/image/transform/w_800,h_600,c_fill/v123/folder/image_name.jpg',
            secure_url: 'https://res.cloudinary.com/cloud/image/transform/w_800,h_600,c_fill/v123/folder/image_name.jpg',
            public_id: 'folder/image_name',
            format: 'jpg',
            width: 800,
            height: 600,
            resource_type: 'image',
            created_at: '2024-01-01T00:00:00Z',
            bytes: 500000,
            type: 'upload',
            etag: 'abc123',
            placeholder: false,
            access_mode: 'public',
            version: 1234567890,
        };

        expect(basicResponse.url).toBe('http://res.cloudinary.com/cloud/image/transform/w_800,h_600,c_fill/v123/folder/image_name.jpg');
        expect(basicResponse.secure_url).toBe('https://res.cloudinary.com/cloud/image/transform/w_800,h_600,c_fill/v123/folder/image_name.jpg');
        expect(basicResponse.public_id).toBe('folder/image_name');
        expect(basicResponse.format).toBe('jpg');
        expect(basicResponse.width).toBe(800);
        expect(basicResponse.height).toBe(600);
        expect(basicResponse.resource_type).toBe('image');
        expect(basicResponse.bytes).toBe(500000);
        expect(basicResponse.type).toBe('upload');
        expect(basicResponse.placeholder).toBe(false);
        expect(basicResponse.access_mode).toBe('public');
        expect(basicResponse.version).toBe(1234567890);
    });

    it('should allow response with URL signature', () => {
        const signedResponse: CloudinaryTransformationResponse = {
            url: 'http://res.cloudinary.com/cloud/image/transform/w_800,h_600,c_fill/v123/folder/image_name.jpg',
            secure_url: 'https://res.cloudinary.com/cloud/image/transform/w_800,h_600,c_fill/v123/folder/image_name.jpg',
            public_id: 'folder/image_name',
            format: 'jpg',
            width: 800,
            height: 600,
            resource_type: 'image',
            created_at: '2024-01-01T00:00:00Z',
            bytes: 500000,
            type: 'upload',
            etag: 'abc123',
            placeholder: false,
            access_mode: 'public',
            version: 1234567890,
            url_signature: 's--abc123--',
        };

        expect(signedResponse.url_signature).toBe('s--abc123--');
    });

    it('should allow response with different resource types', () => {
        const videoResponse: CloudinaryTransformationResponse = {
            url: 'http://res.cloudinary.com/cloud/video/transform/w_640,h_480,c_scale/v123/folder/video_name.mp4',
            secure_url: 'https://res.cloudinary.com/cloud/video/transform/w_640,h_480,c_scale/v123/folder/video_name.mp4',
            public_id: 'folder/video_name',
            format: 'mp4',
            width: 640,
            height: 480,
            resource_type: 'video',
            created_at: '2024-01-01T00:00:00Z',
            bytes: 2000000,
            type: 'upload',
            etag: 'abc123',
            placeholder: false,
            access_mode: 'public',
            version: 1234567890,
        };

        expect(videoResponse.resource_type).toBe('video');
        expect(videoResponse.format).toBe('mp4');
        expect(videoResponse.width).toBe(640);
        expect(videoResponse.height).toBe(480);
    });

    it('should allow response with placeholder', () => {
        const placeholderResponse: CloudinaryTransformationResponse = {
            url: 'http://res.cloudinary.com/cloud/image/transform/w_800,h_600,c_fill/v123/folder/image_name.jpg',
            secure_url: 'https://res.cloudinary.com/cloud/image/transform/w_800,h_600,c_fill/v123/folder/image_name.jpg',
            public_id: 'folder/image_name',
            format: 'jpg',
            width: 800,
            height: 600,
            resource_type: 'image',
            created_at: '2024-01-01T00:00:00Z',
            bytes: 500000,
            type: 'upload',
            etag: 'abc123',
            placeholder: true,
            access_mode: 'public',
            version: 1234567890,
        };

        expect(placeholderResponse.placeholder).toBe(true);
    });

    it('should allow response with different access modes', () => {
        const privateResponse: CloudinaryTransformationResponse = {
            url: 'http://res.cloudinary.com/cloud/image/transform/w_800,h_600,c_fill/v123/folder/image_name.jpg',
            secure_url: 'https://res.cloudinary.com/cloud/image/transform/w_800,h_600,c_fill/v123/folder/image_name.jpg',
            public_id: 'folder/image_name',
            format: 'jpg',
            width: 800,
            height: 600,
            resource_type: 'image',
            created_at: '2024-01-01T00:00:00Z',
            bytes: 500000,
            type: 'upload',
            etag: 'abc123',
            placeholder: false,
            access_mode: 'authenticated',
            version: 1234567890,
        };

        expect(privateResponse.access_mode).toBe('authenticated');
    });
});
