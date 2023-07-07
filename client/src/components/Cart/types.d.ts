export interface ICartData {
  image: string;
  title: string;
  price: string;
}

export interface ICardTotalData {
  title: string;
  price: string;
}

export interface ICartTabsProp {
  tabTitle: string;
  icon: React.ReactSVGElement | any;
  title: string;
  content: React.ReactElement<any>;
}
