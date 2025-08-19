# @scwar/nestjs-cloudinary

A comprehensive NestJS module for integrating with Cloudinary API. This package provides a clean, type-safe interface for uploading, transforming, and managing media assets through Cloudinary.

## Features

- 🚀 **Easy Integration**: Simple setup with NestJS dependency injection
- 📁 **File Upload**: Support for file uploads from Buffer, streams, and URLs
- 🎨 **Transformations**: Built-in support for image and video transformations
- 🗑️ **Asset Management**: Delete and manage Cloudinary resources
- 🔒 **Type Safety**: Full TypeScript support with comprehensive interfaces
- ⚡ **Performance**: Optimized for high-performance applications
- 🌐 **Global Module**: Can be used as a global module across your application

## Installation

```bash
npm install @scwar/nestjs-cloudinary cloudinary
# or
yarn add @scwar/nestjs-cloudinary cloudinary
```

## Quick Start

### 1. Import the Module

```typescript
import { Module } from '@nestjs/common';
import { CloudinaryModule } from '@scwar/nestjs-cloudinary';

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
export class AppModule {}
```

### 2. Use the Service

```typescript
import { Injectable } from '@nestjs/common';
import { CloudinaryService } from '@scwar/nestjs-cloudinary';

@Injectable()
export class MediaService {
  constructor(private readonly cloudinaryService: CloudinaryService) {}

  async uploadImage(file: Buffer) {
    return this.cloudinaryService.upload(file, {
      folder: 'images',
      resource_type: 'image',
    });
  }

  async getTransformedUrl(publicId: string) {
    return this.cloudinaryService.url(publicId, {
      width: 300,
      height: 300,
      crop: 'fill',
      gravity: 'face',
    });
  }
}
```

## Configuration Options

### CloudinaryModuleOptions

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `cloud_name` | string | - | Your Cloudinary cloud name |
| `api_key` | string | - | Your Cloudinary API key |
| `api_secret` | string | - | Your Cloudinary API secret |
| `secure` | boolean | true | Use HTTPS for URLs |
| `private_cdn` | boolean | false | Use private CDN |
| `cname` | string | - | Custom domain name |
| `cdn_subdomain` | boolean | false | Use CDN subdomain |

## API Reference

### CloudinaryService

#### upload(file: string \| Buffer, options?: CloudinaryUploadOptions)

Upload a file to Cloudinary.

```typescript
const result = await cloudinaryService.upload(fileBuffer, {
  folder: 'products',
  tags: ['product', 'image'],
  transformation: { width: 800, height: 600, crop: 'fill' }
});
```

#### uploadFromUrl(url: string, options?: CloudinaryUploadOptions)

Upload a file from a URL to Cloudinary.

```typescript
const result = await cloudinaryService.uploadFromUrl('https://example.com/image.jpg', {
  folder: 'external',
  public_id: 'my_image'
});
```

#### delete(publicId: string, options?: CloudinaryDeleteOptions)

Delete a file from Cloudinary.

```typescript
const result = await cloudinaryService.delete('folder/image_name', {
  resource_type: 'image',
  invalidate: true
});
```

#### url(publicId: string, options?: CloudinaryTransformationOptions)

Generate a transformation URL for an image.

```typescript
const url = cloudinaryService.url('folder/image_name', {
  width: 300,
  height: 300,
  crop: 'thumb',
  gravity: 'face'
});
```

#### videoUrl(publicId: string, options?: CloudinaryTransformationOptions)

Generate a transformation URL for a video.

```typescript
const url = cloudinaryService.videoUrl('folder/video_name', {
  width: 640,
  height: 480,
  crop: 'scale'
});
```

#### getResources(options?: CloudinaryResourceOptions)

Get a list of resources from Cloudinary.

```typescript
const resources = await cloudinaryService.getResources({
  resource_type: 'image',
  max_results: 20,
  tags: true
});
```

#### getResource(publicId: string, options?: any)

Get a single resource by public ID.

```typescript
const resource = await cloudinaryService.getResource('folder/image_name', {
  colors: true,
  faces: true
});
```

## Async Configuration

For dynamic configuration (e.g., from environment variables or configuration service):

```typescript
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CloudinaryModule } from '@scwar/nestjs-cloudinary';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CloudinaryModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        cloud_name: configService.get('CLOUDINARY_CLOUD_NAME'),
        api_key: configService.get('CLOUDINARY_API_KEY'),
        api_secret: configService.get('CLOUDINARY_API_SECRET'),
        secure: true,
      }),
      inject: [ConfigService],
    }),
  ],
})
export class AppModule {}
```

## Examples

### File Upload Controller

```typescript
import { Controller, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CloudinaryService } from '@scwar/nestjs-cloudinary';

@Controller('media')
export class MediaController {
  constructor(private readonly cloudinaryService: CloudinaryService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    const result = await this.cloudinaryService.upload(file.buffer, {
      folder: 'uploads',
      resource_type: 'auto',
    });
    
    return {
      publicId: result.public_id,
      url: result.secure_url,
      format: result.format,
      size: result.bytes,
    };
  }
}
```

### Image Transformation Service

```typescript
import { Injectable } from '@nestjs/common';
import { CloudinaryService } from '@scwar/nestjs-cloudinary';

@Injectable()
export class ImageService {
  constructor(private readonly cloudinaryService: CloudinaryService) {}

  getThumbnailUrl(publicId: string) {
    return this.cloudinaryService.url(publicId, {
      width: 150,
      height: 150,
      crop: 'thumb',
      gravity: 'face',
    });
  }

  getResponsiveUrl(publicId: string, width: number) {
    return this.cloudinaryService.url(publicId, {
      width,
      crop: 'scale',
      quality: 'auto',
      fetch_format: 'auto',
    });
  }
}
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you have any questions or need help, please open an issue on GitHub or contact the maintainers.
