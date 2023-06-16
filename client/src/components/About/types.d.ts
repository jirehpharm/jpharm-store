export interface IWhyChooseUsProps {
  icon?: React.ReactSVGElement | any;
  title: string;
  description: string;
}

export interface IStatsProps {
  icon?: React.ReactSVGElement | any;
  number: string;
  description: string;
}

export interface IListProps {
  icon: React.ReactSVG | any;
  title: string;
}

export interface IPartnersProps {
  image: string;
  title: string;
  description: string;
  list: IListProps[];
  name?: string;
  field?: string;
  authorImg?: string;
}
