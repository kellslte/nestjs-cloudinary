export interface CloudinaryTransformationOptions {
  // Basic transformation options
  width?: number | string;
  height?: number | string;
  crop?: string;
  gravity?: string;
  quality?: number | string;
  format?: string;
  fetch_format?: string;
  radius?: number | string;
  angle?: number | string;
  effect?: string;
  opacity?: number;
  border?: string;
  background?: string;
  overlay?: string;
  underlay?: string;
  flags?: string;
  dpr?: number | string;
  zoom?: number;
  x?: number | string;
  y?: number | string;
  aspect_ratio?: number | string;
  color?: string;
  color_space?: string;
  delay?: number;
  density?: number;
  page?: number;
  offset?: number;
  duration?: number;
  start_offset?: number;
  end_offset?: number;
  video_codec?: string;
  audio_codec?: string;
  bit_rate?: number | string;
  audio_bit_rate?: number | string;
  fps?: number | string;
  keyframe_interval?: number;
  streaming_profile?: string;
  video_sampling?: number;

  // Shorthand transformation options
  w?: number | string;
  h?: number | string;
  c?: string;
  g?: string;
  q?: number | string;
  f?: string;
  r?: number | string;
  a?: number | string;
  e?: string;
  o?: number;
  bo?: string;
  b?: string;
  l?: string;
  z?: number;
  ar?: number | string;
  co?: string;
  dn?: number;
  pg?: number;
  of?: number;
  du?: number;
  eo?: number;
  vc?: string;
  ac?: string;
  br?: number | string;
  ab?: number | string;
  ki?: number;
  sp?: string;
}

export interface CloudinaryTransformationResponse {
  url: string;
  secure_url: string;
  public_id: string;
  format: string;
  width: number;
  height: number;
  resource_type: string;
  created_at: string;
  bytes: number;
  type: string;
  etag: string;
  placeholder: boolean;
  access_mode: string;
  url_signature?: string;
  version: number;
}
