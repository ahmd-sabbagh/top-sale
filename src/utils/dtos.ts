import { StaticImageData } from "next/image";

export interface AdsCardType {
  image: string | StaticImageData;
  name: string;
  type: string;
  price: string;
  oldPrice?: string;
  fav: boolean;
  status?:boolean
}
export interface HeadCompnent {
  title: string;
  description: string;
  href?: string;
}
export interface OpinionsCards {
  starLength: number;
  description: string;
  image: StaticImageData | string;
  name: string;
  jop: string;
}

export interface OwnerAds {
  image: string | StaticImageData;
  name: string;
  time: string;
  whatsApp?: string;
  mobile?: string;
}

export interface ProductDetailsTextType {
  name: string;
  price: string;
  rateCount: string;
  rateRange: string;
  description: string;
  owner?: OwnerAds;
}

export interface UserCommentType {
  image: string | StaticImageData;
  name: string;
  time: string;
  description: string;
  rateValue: number;
}
