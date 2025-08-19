import { DynamicModule, Module } from '@nestjs/common';
import { CLOUDINARY_MODULE_OPTIONS } from './constants';
import { CloudinaryModuleOptions } from './interfaces';
import { CloudinaryService } from './cloudinary.service';

@Module({})
export class CloudinaryModule {
  static forRoot(options: CloudinaryModuleOptions): DynamicModule {
    return {
      module: CloudinaryModule,
      providers: [
        {
          provide: CLOUDINARY_MODULE_OPTIONS,
          useValue: {
            cloud_name: '',
            api_key: '',
            api_secret: '',
            secure: true,
            ...options,
          },
        },
        CloudinaryService,
      ],
      exports: [CloudinaryService],
      global: true,
    };
  }

  static forRootAsync(options: any): DynamicModule {
    return {
      module: CloudinaryModule,
      imports: options.imports || [],
      providers: [
        {
          provide: CLOUDINARY_MODULE_OPTIONS,
          useFactory: options.useFactory,
          inject: options.inject || [],
        },
        CloudinaryService,
      ],
      exports: [CloudinaryService],
      global: true,
    };
  }
}
