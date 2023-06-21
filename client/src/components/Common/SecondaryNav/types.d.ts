export interface INavData {
  title: string;
  link: string;
}

export interface INavSubListGroup {
  title: string;
  link: string;
  subList?: INavData[];
}

export interface INavListGroup {
  title: string;
  link: string;
  list?: INavSubList[];
}

export type INavList = INavListGroup[];

export interface ICategory {
  title: string;
  link: string;
  icon?: React.ElementType;
}

export interface IDisclosureProps {
  title?: string;
  link?: string;
  icon?: React.ReactSVGElement | any;
}
