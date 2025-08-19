export interface CloudinaryDeleteOptions {
  resource_type?: 'image' | 'video' | 'audio' | 'raw';
  type?: string;
  invalidate?: boolean;
  keep_original?: boolean;
  next_cursor?: string;
}

export interface CloudinaryDeleteResponse {
  deleted: Record<string, string>;
  partial: boolean;
  deleted_counts: Record<string, number>;
  next_cursor?: string;
}

export interface CloudinaryResourceOptions {
  resource_type?: 'image' | 'video' | 'audio' | 'raw';
  type?: string;
  prefix?: string;
  tags?: boolean;
  context?: boolean;
  moderation?: boolean;
  transformations?: boolean;
  max_results?: number;
  next_cursor?: string;
  start_at?: string;
  direction?: 'asc' | 'desc';
  fields?: string[];
}

export interface CloudinaryResourceResponse {
  resources: Array<{
    public_id: string;
    format: string;
    version: number;
    resource_type: string;
    type: string;
    created_at: string;
    bytes: number;
    width: number;
    height: number;
    backup: boolean;
    access_mode: string;
    url: string;
    secure_url: string;
    tags: string[];
    context: object;
    metadata: object;
    derived: object[];
    eager?: Array<{
      transformation: string;
      width: number;
      height: number;
      bytes: number;
      format: string;
      url: string;
      secure_url: string;
    }>;
    placeholder: boolean;
    phash?: string;
    original_filename?: string;
    pages?: number;
    duration?: number;
    bit_rate?: number;
    audio?: object;
    video?: object;
    is_audio?: boolean;
    frame_rate?: number;
    start_time?: number;
    rotation?: number;
    coordinates?: object;
    faces?: number[][];
    moderation?: object[];
    access_control?: object[];
    colors?: object;
    predominant?: object;
    cinemagraph_analysis?: object;
    accessibility_analysis?: object;
    visual_search?: object;
  }>;
  next_cursor?: string;
  rate_limit_allowed: number;
  rate_limit_reset_at: string;
  rate_limit_remaining: number;
}
