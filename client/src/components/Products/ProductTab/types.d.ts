export interface ICommentsProps {
  image: string;
  name: string;
  description: string;
  date: string;
  stars: number;
}

export interface IReviewsProp {
  totalReviews: number;
  comments: ICommentsProps[];
}

export interface ITabsProp {
  tabTitle: string;
  title: string;
  content: React.ReactElement<any>;
}

export interface ITableProp {
  name: string;
  value: string;
}
