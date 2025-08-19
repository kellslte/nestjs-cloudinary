import { Inject, Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';
import { CLOUDINARY_MODULE_OPTIONS } from './constants';
import {
  CloudinaryModuleOptions,
  CloudinaryUploadOptions,
  CloudinaryUploadResponse,
  CloudinaryTransformationOptions,
  CloudinaryDeleteOptions,
  CloudinaryDeleteResponse,
  CloudinaryResourceOptions,
  CloudinaryResourceResponse,
} from './interfaces';

@Injectable()
export class CloudinaryService {
  private cloudinary: typeof cloudinary;

  constructor(
    @Inject(CLOUDINARY_MODULE_OPTIONS)
    private readonly options: CloudinaryModuleOptions,
  ) {
    this.cloudinary = cloudinary;
    this.cloudinary.config({
      cloud_name: this.options.cloud_name,
      api_key: this.options.api_key,
      api_secret: this.options.api_secret,
      secure: this.options.secure,
      private_cdn: this.options.private_cdn,
      cname: this.options.cname,
      cdn_subdomain: this.options.cdn_subdomain,
      secure_distribution: this.options.secure_distribution,
    });
  }

  /**
   * Upload a file to Cloudinary
   */
  async upload(
    file: string | Buffer,
    options?: CloudinaryUploadOptions,
  ): Promise<CloudinaryUploadResponse> {
    return new Promise((resolve, reject) => {
      const uploadStream = this.cloudinary.uploader.upload_stream(
        options,
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result as CloudinaryUploadResponse);
          }
        },
      );

      if (Buffer.isBuffer(file)) {
        uploadStream.end(file);
      } else {
        uploadStream.end(file);
      }
    });
  }

  /**
   * Upload a file from a URL
   */
  async uploadFromUrl(
    url: string,
    options?: CloudinaryUploadOptions,
  ): Promise<CloudinaryUploadResponse> {
    return this.cloudinary.uploader.upload(url, options);
  }

  /**
   * Delete a file from Cloudinary
   */
  async delete(
    publicId: string,
    options?: CloudinaryDeleteOptions,
  ): Promise<CloudinaryDeleteResponse> {
    return this.cloudinary.uploader.destroy(publicId, options);
  }

  /**
   * Get resources from Cloudinary
   */
  async getResources(options?: CloudinaryResourceOptions): Promise<CloudinaryResourceResponse> {
    return this.cloudinary.api.resources(options);
  }

  /**
   * Get a single resource by public ID
   */
  async getResource(publicId: string, options?: any) {
    return this.cloudinary.api.resource(publicId, options);
  }

  /**
   * Create a transformation URL
   */
  url(publicId: string, options?: CloudinaryTransformationOptions): string {
    return this.cloudinary.url(publicId, options);
  }

  /**
   * Create a video transformation URL
   */
  videoUrl(publicId: string, options?: CloudinaryTransformationOptions): string {
    return this.cloudinary.url(publicId, options);
  }

  /**
   * Get the Cloudinary instance for advanced operations
   */
  getInstance(): typeof cloudinary {
    return this.cloudinary;
  }
}
