export interface IHeroSectionProps {
  offer?: string;
  title?: string;
  price?: string;
  buttonUrl?: string;
}

export interface IOfferBannerProps {
  offerEndDate?: string;
  image?: string;
  title?: string;
  subtitle1?: string;
  subtitle2?: string;
  description1?: string;
  description2?: string;
}

export interface IFeaturedProductProps {
  productName: string;
  discountedPrice: string;
  originalPrice: string;
  image: string;
  stars?: number;
}
