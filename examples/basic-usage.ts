import { Module } from '@nestjs/common';
import { CloudinaryModule } from '../src/cloudinary.module';

@Module({
    imports: [
        CloudinaryModule.forRoot({
            cloud_name: 'your_cloud_name',
            api_key: 'your_api_key',
            api_secret: 'your_api_secret',
            secure: true,
        }),
    ],
})
export class AppModule { }

// Example service usage
import { Injectable } from '@nestjs/common';
import { CloudinaryService } from '../src/cloudinary.service';

@Injectable()
export class MediaService {
    constructor(private readonly cloudinaryService: CloudinaryService) { }

    async uploadImage(file: Buffer) {
        return this.cloudinaryService.upload(file, {
            folder: 'images',
            resource_type: 'image',
        });
    }

    getThumbnailUrl(publicId: string) {
        return this.cloudinaryService.url(publicId, {
            width: 150,
            height: 150,
            crop: 'thumb',
            gravity: 'face',
        });
    }
}
