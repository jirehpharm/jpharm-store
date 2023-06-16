export interface IViewCartCardProps {
  productName: string;
  productLink: string;
  imageSrc: string;
  imageAlt?: string;
  productPrice: string;
  productQuantity: Int;
  amount: Int;
  closeDrawer?: any;
}

export interface ICartDrawerProps {
  setDrawer: any;
  checkOutCartLink: string;
  viewCartLink: string;
  productCount?: Int;
  closeDrawer?: any;
}
