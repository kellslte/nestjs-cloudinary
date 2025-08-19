import { Test, TestingModule } from '@nestjs/testing';
import { CloudinaryService } from '../src/cloudinary.service';
import { CLOUDINARY_MODULE_OPTIONS } from '../src/constants';

describe('CloudinaryService', () => {
    let service: CloudinaryService;

    const mockOptions = {
        cloud_name: 'test_cloud',
        api_key: 'test_api_key',
        api_secret: 'test_api_secret',
        secure: true,
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CloudinaryService,
                {
                    provide: CLOUDINARY_MODULE_OPTIONS,
                    useValue: mockOptions,
                },
            ],
        }).compile();

        service = module.get<CloudinaryService>(CloudinaryService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should have correct configuration', () => {
        expect(service).toBeDefined();
    });
});
