export interface IViewCartCardProps {
  productName: string;
  productLink: string;
  imageSrc: string;
  imageAlt?: string;
  productPrice: string;
  productQuantity: number;
  amount: number;
  closeDrawer?: any;
}

export interface ICartDrawerProps {
  setDrawer: any;
  checkOutCartLink: string;
  viewCartLink: string;
  productCount?: number;
  closeDrawer?: any;
}
