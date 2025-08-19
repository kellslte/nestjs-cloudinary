export interface CloudinaryModuleOptions {
  cloud_name: string;
  api_key: string;
  api_secret: string;
  secure?: boolean;
  private_cdn?: boolean;
  cname?: string;
  cdn_subdomain?: boolean;
  secure_distribution?: string;
  upload_preset?: string;
  timeout?: number;
  retries?: number;
  retryDelay?: number;
  maxRetryDelay?: number;
}

export interface CloudinaryModuleAsyncOptions {
  imports?: any[];
  useFactory: (...args: any[]) => Promise<CloudinaryModuleOptions> | CloudinaryModuleOptions;
  inject?: any[];
}
