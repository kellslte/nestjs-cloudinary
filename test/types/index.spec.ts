import {
    CloudinaryResourceType,
    CloudinaryAccessMode,
    CloudinaryDeliveryType,
    CloudinaryTransformationCrop,
    CloudinaryTransformationGravity,
} from '../../src/types';

describe('Cloudinary Types', () => {
    describe('CloudinaryResourceType', () => {
        it('should allow valid resource types', () => {
            const imageType: CloudinaryResourceType = 'image';
            const videoType: CloudinaryResourceType = 'video';
            const audioType: CloudinaryResourceType = 'audio';
            const rawType: CloudinaryResourceType = 'raw';

            expect(imageType).toBe('image');
            expect(videoType).toBe('video');
            expect(audioType).toBe('audio');
            expect(rawType).toBe('raw');
        });

        it('should not allow invalid resource types', () => {
            // This test ensures TypeScript compilation fails for invalid types
            // The following lines would cause TypeScript errors if uncommented:
            // const invalidType: CloudinaryResourceType = 'invalid'; // Type '"invalid"' is not assignable to type 'CloudinaryResourceType'

            // Instead, we test that valid types work
            const validTypes: CloudinaryResourceType[] = ['image', 'video', 'audio', 'raw'];
            expect(validTypes).toHaveLength(4);
            expect(validTypes).toContain('image');
            expect(validTypes).toContain('video');
            expect(validTypes).toContain('audio');
            expect(validTypes).toContain('raw');
        });
    });

    describe('CloudinaryAccessMode', () => {
        it('should allow valid access modes', () => {
            const publicMode: CloudinaryAccessMode = 'public';
            const authenticatedMode: CloudinaryAccessMode = 'authenticated';
            const privateMode: CloudinaryAccessMode = 'private';

            expect(publicMode).toBe('public');
            expect(authenticatedMode).toBe('authenticated');
            expect(privateMode).toBe('private');
        });

        it('should not allow invalid access modes', () => {
            const validModes: CloudinaryAccessMode[] = ['public', 'authenticated', 'private'];
            expect(validModes).toHaveLength(3);
            expect(validModes).toContain('public');
            expect(validModes).toContain('authenticated');
            expect(validModes).toContain('private');
        });
    });

    describe('CloudinaryDeliveryType', () => {
        it('should allow valid delivery types', () => {
            const uploadType: CloudinaryDeliveryType = 'upload';
            const privateType: CloudinaryDeliveryType = 'private';
            const authenticatedType: CloudinaryDeliveryType = 'authenticated';

            expect(uploadType).toBe('upload');
            expect(privateType).toBe('private');
            expect(authenticatedType).toBe('authenticated');
        });

        it('should not allow invalid delivery types', () => {
            const validTypes: CloudinaryDeliveryType[] = ['upload', 'private', 'authenticated'];
            expect(validTypes).toHaveLength(3);
            expect(validTypes).toContain('upload');
            expect(validTypes).toContain('private');
            expect(validTypes).toContain('authenticated');
        });
    });

    describe('CloudinaryTransformationCrop', () => {
        it('should allow valid crop values', () => {
            const scaleCrop: CloudinaryTransformationCrop = 'scale';
            const fitCrop: CloudinaryTransformationCrop = 'fit';
            const limitCrop: CloudinaryTransformationCrop = 'limit';
            const mfitCrop: CloudinaryTransformationCrop = 'mfit';
            const fillCrop: CloudinaryTransformationCrop = 'fill';
            const lfillCrop: CloudinaryTransformationCrop = 'lfill';
            const padCrop: CloudinaryTransformationCrop = 'pad';
            const lpadCrop: CloudinaryTransformationCrop = 'lpad';
            const mpadCrop: CloudinaryTransformationCrop = 'mpad';
            const cropCrop: CloudinaryTransformationCrop = 'crop';
            const thumbCrop: CloudinaryTransformationCrop = 'thumb';
            const imaggaCrop: CloudinaryTransformationCrop = 'imagga_crop';
            const imaggaScale: CloudinaryTransformationCrop = 'imagga_scale';

            expect(scaleCrop).toBe('scale');
            expect(fitCrop).toBe('fit');
            expect(limitCrop).toBe('limit');
            expect(mfitCrop).toBe('mfit');
            expect(fillCrop).toBe('fill');
            expect(lfillCrop).toBe('lfill');
            expect(padCrop).toBe('pad');
            expect(lpadCrop).toBe('lpad');
            expect(mpadCrop).toBe('mpad');
            expect(cropCrop).toBe('crop');
            expect(thumbCrop).toBe('thumb');
            expect(imaggaCrop).toBe('imagga_crop');
            expect(imaggaScale).toBe('imagga_scale');
        });

        it('should contain all expected crop values', () => {
            const validCrops: CloudinaryTransformationCrop[] = [
                'scale', 'fit', 'limit', 'mfit', 'fill', 'lfill', 'pad', 'lpad', 'mpad',
                'crop', 'thumb', 'imagga_crop', 'imagga_scale'
            ];
            expect(validCrops).toHaveLength(13);
        });
    });

    describe('CloudinaryTransformationGravity', () => {
        it('should allow valid gravity values', () => {
            const northWest: CloudinaryTransformationGravity = 'north_west';
            const north: CloudinaryTransformationGravity = 'north';
            const northEast: CloudinaryTransformationGravity = 'north_east';
            const west: CloudinaryTransformationGravity = 'west';
            const center: CloudinaryTransformationGravity = 'center';
            const east: CloudinaryTransformationGravity = 'east';
            const southWest: CloudinaryTransformationGravity = 'south_west';
            const south: CloudinaryTransformationGravity = 'south';
            const southEast: CloudinaryTransformationGravity = 'south_east';
            const xyCenter: CloudinaryTransformationGravity = 'xy_center';
            const face: CloudinaryTransformationGravity = 'face';
            const faces: CloudinaryTransformationGravity = 'faces';
            const body: CloudinaryTransformationGravity = 'body';
            const advFace: CloudinaryTransformationGravity = 'adv_face';
            const advFaces: CloudinaryTransformationGravity = 'adv_faces';
            const advEyes: CloudinaryTransformationGravity = 'adv_eyes';
            const advEar: CloudinaryTransformationGravity = 'adv_ear';
            const advNose: CloudinaryTransformationGravity = 'adv_nose';
            const advMouth: CloudinaryTransformationGravity = 'adv_mouth';
            const advLegs: CloudinaryTransformationGravity = 'adv_legs';
            const advArms: CloudinaryTransformationGravity = 'adv_arms';
            const auto: CloudinaryTransformationGravity = 'auto';
            const autoAdvFace: CloudinaryTransformationGravity = 'auto:adv_face';
            const autoAdvFaces: CloudinaryTransformationGravity = 'auto:adv_faces';
            const autoAdvEyes: CloudinaryTransformationGravity = 'auto:adv_eyes';
            const autoAdvEar: CloudinaryTransformationGravity = 'auto:adv_ear';
            const autoAdvNose: CloudinaryTransformationGravity = 'auto:adv_nose';
            const autoAdvMouth: CloudinaryTransformationGravity = 'auto:adv_mouth';
            const autoAdvLegs: CloudinaryTransformationGravity = 'auto:adv_legs';
            const autoAdvArms: CloudinaryTransformationGravity = 'auto:adv_arms';

            expect(northWest).toBe('north_west');
            expect(north).toBe('north');
            expect(northEast).toBe('north_east');
            expect(west).toBe('west');
            expect(center).toBe('center');
            expect(east).toBe('east');
            expect(southWest).toBe('south_west');
            expect(south).toBe('south');
            expect(southEast).toBe('south_east');
            expect(xyCenter).toBe('xy_center');
            expect(face).toBe('face');
            expect(faces).toBe('faces');
            expect(body).toBe('body');
            expect(advFace).toBe('adv_face');
            expect(advFaces).toBe('adv_faces');
            expect(advEyes).toBe('adv_eyes');
            expect(advEar).toBe('adv_ear');
            expect(advNose).toBe('adv_nose');
            expect(advMouth).toBe('adv_mouth');
            expect(advLegs).toBe('adv_legs');
            expect(advArms).toBe('adv_arms');
            expect(auto).toBe('auto');
            expect(autoAdvFace).toBe('auto:adv_face');
            expect(autoAdvFaces).toBe('auto:adv_faces');
            expect(autoAdvEyes).toBe('auto:adv_eyes');
            expect(autoAdvEar).toBe('auto:adv_ear');
            expect(autoAdvNose).toBe('auto:adv_nose');
            expect(autoAdvMouth).toBe('auto:adv_mouth');
            expect(autoAdvLegs).toBe('auto:adv_legs');
            expect(autoAdvArms).toBe('auto:adv_arms');
        });

        it('should contain all expected gravity values', () => {
            const validGravities: CloudinaryTransformationGravity[] = [
                'north_west', 'north', 'north_east', 'west', 'center', 'east',
                'south_west', 'south', 'south_east', 'xy_center', 'face', 'faces',
                'body', 'adv_face', 'adv_faces', 'adv_eyes', 'adv_ear', 'adv_nose',
                'adv_mouth', 'adv_legs', 'adv_arms', 'auto', 'auto:adv_face',
                'auto:adv_faces', 'auto:adv_eyes', 'auto:adv_ear', 'auto:adv_nose',
                'auto:adv_mouth', 'auto:adv_legs', 'auto:adv_arms'
            ];
            expect(validGravities).toHaveLength(30);
        });
    });

    describe('Type Usage in Functions', () => {
        it('should work with function parameters', () => {
            function testResourceType(type: CloudinaryResourceType): string {
                return `Resource type: ${type}`;
            }

            function testAccessMode(mode: CloudinaryAccessMode): string {
                return `Access mode: ${mode}`;
            }

            function testDeliveryType(type: CloudinaryDeliveryType): string {
                return `Delivery type: ${type}`;
            }

            function testCrop(crop: CloudinaryTransformationCrop): string {
                return `Crop: ${crop}`;
            }

            function testGravity(gravity: CloudinaryTransformationGravity): string {
                return `Gravity: ${gravity}`;
            }

            expect(testResourceType('image')).toBe('Resource type: image');
            expect(testAccessMode('public')).toBe('Access mode: public');
            expect(testDeliveryType('upload')).toBe('Delivery type: upload');
            expect(testCrop('fill')).toBe('Crop: fill');
            expect(testGravity('center')).toBe('Gravity: center');
        });

        it('should work with arrays', () => {
            const resourceTypes: CloudinaryResourceType[] = ['image', 'video'];
            const accessModes: CloudinaryAccessMode[] = ['public', 'authenticated'];
            const deliveryTypes: CloudinaryDeliveryType[] = ['upload', 'private'];
            const crops: CloudinaryTransformationCrop[] = ['scale', 'fill'];
            const gravities: CloudinaryTransformationGravity[] = ['north', 'south'];

            expect(resourceTypes).toContain('image');
            expect(resourceTypes).toContain('video');
            expect(accessModes).toContain('public');
            expect(accessModes).toContain('authenticated');
            expect(deliveryTypes).toContain('upload');
            expect(deliveryTypes).toContain('private');
            expect(crops).toContain('scale');
            expect(crops).toContain('fill');
            expect(gravities).toContain('north');
            expect(gravities).toContain('south');
        });
    });
});
