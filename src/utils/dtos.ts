import { StaticImageData } from "next/image";

export interface AdsCardType {
  image: string | StaticImageData;
  name: string;
  type: string;
  price: string;
  oldPrice?: string;
  fav: boolean;
  status?: boolean;
  owner?: boolean;
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

export interface Banner {
  photoBase64: string;
  photo: string;
  type: string;
  id: string;
}

export interface CarModel {
  _id: string;
  title: string;
  titleAr: string;
  titleEn: string;
}

export interface Photo {
  _id: string;
  org: string;
  thumb: string;
  thumb600: string;
  thumbBase64: string;
}

export interface User {
  _id: string;
  mobile: string;
  joinDate: string | Date;
  id: string;
  isFollowing: boolean;
}

export interface CarAd {
  _id: string;
  id: string;
  title: string;
  status: string;
  carYear: string;
  km: number;
  price: number;
  photos: Photo[];
  user: User;
  carModel: CarModel | null;
  isFavourite: boolean;
}
export interface AdsData {
  ads: CarAd[];
}
export interface HomeData {
  ads: CarAd[];
  banners: Banner[];
}

export interface CategoryTitle {
  ar: string;
  en: string;
}

export interface CategoryType {
  title: CategoryTitle;
  _id: string;
}

export interface SubCategory {}

export interface Category {
  title: CategoryTitle;
  type: string;
  isLocationRequired: boolean;
  subcategories: SubCategory[];
  types: CategoryType[];
  requiresApproval: boolean;
  _id: string;
  image: string;
  realmId: string;
  mainCategory: string;
  imageBase64: string;
}

export interface MainCategory {
  title: CategoryTitle;
  order: number;
  _id: string;
  categories: Category[];
}
export interface AdUser {
  name: string;
  stats: {
    adsCount: number;
    followingsCount: number;
    followersCount: number;
    favAdsCount: number;
    blocksCount: number;
  };
  facebookPageUrl: string;
  websiteUrl: string;
  _id: string;
  mobile: string;
  profilePhoto: string;
  joinDate: {
    ar: string;
    en: string;
  };
  id: string;
  isFollowing: boolean;
}
export interface AdsDetails {
  location: {
    type: string;
    address: string;
    coordinates: [number, number];
  };
  isFixed: boolean;
  featuredNumber: number;
  commentsCount: number;
  viewsCount: number;
  likesCount: number;
  likesUsers: string[]; // assuming it's array of user IDs
  isPaid: boolean;
  isExpired: boolean;
  advertiserType: "owner" | string;
  _id: string;
  title: string;
  carYear: string;
  fuelType: string;
  pushFatisType: string;
  color: string;
  km: number;
  gearBox: string;
  engineCapacity: string;
  price: number;
  details: string;
  space: number | null;
  category: {
    title: {
      ar: string;
      en: string;
    };
    _id: string;
  };
  type: {
    title: {
      ar: string;
      en: string;
    };
    _id: string;
  };
  carMake: {
    _id: string;
    title: string;
    titleAr: string;
    titleEn: string;
  };
  carModel: CarModel | null;
  carSubModel: {
    _id: string;
    title: string;
    titleAr: string;
    titleEn: string;
  };
  city: {
    title: {
      ar: string;
      en: string;
    };
    _id: string;
  };
  iaAllowComments: boolean;
  user: AdUser;
  photos: Photo[];
  publishedAt: string;
  isLiked: boolean;
  isFavourite: boolean;
  canRepublish: boolean;
  status: string;
  id: string;
}
export interface SimilarAds {
  ads: CarAd[];
  count: number;
}

export interface CommentResponse {
  comments: Comment[];
  count: number;
  total: number;
  loadMore: boolean;
}

export interface Comment {
  _id: string;
  ad: string;
  text: string;
  createdAt: Date;
  isAdOwner: boolean;
  isCommentOwner: boolean;
  user: {
    _id: string;
    name: string;
    mobile: string;
  };
}
