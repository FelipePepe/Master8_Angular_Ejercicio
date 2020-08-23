export interface GalleryModel {
  total_results: number;
  page: number;
  per_page: number;
  photos: Photos[];
}

interface Photos {
  id: number;
  width: number;
  heigth: number;
  url: string;
  src: UrlImage;
}

interface UrlImage {
  original: string;
  large2x: string;
  large: string;
  medium: string;
  small: string;
  portrait: string;
  landscape: string;
  tiny: string;
}
