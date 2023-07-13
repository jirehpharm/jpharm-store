import { IProductProps } from "../Home/types";

export interface IPaginationProps {
  pageCount: number;
  onPageChange: (event: { selected: number }) => void;
  previousLabel: React.ReactElement;
  nextLabel: React.ReactElement;
  pageClassName: string;
  pageLinkClassName: string;
  previousClassName: string;
  previousLinkClassName: string;
  nextClassName: string;
  nextLinkClassName: string;
  breakLabel: string;
  breakClassName: string;
  breakLinkClassName: string;
  containerClassName: string;
  activeClassName: string;
  renderOnZeroPageCount: any;
}

export interface IItemsProps {
  currentItems: IProductProps[] | null;
}

export interface IPaginatedItemsProps {
  items: IProductProps[];
  itemsPerPage: number;
}
