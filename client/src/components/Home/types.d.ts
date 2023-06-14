export interface IHeroSectionProps {
  offer?: string;
  title: string;
  price?: string;
  buttonUrl?: string;
}

export interface IWidgetsProps {
  icon: React.ElementType;
  title: string;
}

export interface IBannerProps {
  bgImage: string;
  miniTitle: string;
  title: string;
  description: string;
  widgets: IWidgetsProps[];
  link: string;
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
export interface IProductProps {
  isNew: boolean;
  image: string;
  quickView: string;
  addToCard: string;
  wishlist: string;
  stars: number;
  productName: string;
  price: string;
  originalPrice: string;
}
