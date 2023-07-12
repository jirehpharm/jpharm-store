export interface IWhishListProps {
  image: string;
  productName: string;
}

export interface IRecentlyViewedProps {
  image: string;
  productName: string;
}

export interface IRecentOrdersProps {
  orderNo: string;
  orderSrc: string;
  totalPrice: string;
  dateOfOrder: string;
  buyer: string;
  status: string;
  trackNumber: string;
  trackSrc: string;
  download: string;
  downloadSrc: string;
}
