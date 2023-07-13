import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";

import ProductOverViewCard from "../Cards/ProductOverViewCard";
import SelectField from "../Form/SelectField";
import { selectData } from "./constant";
import { IProductProps } from "../Home/types";
import { IItemsProps, IPaginatedItemsProps, IPaginationProps } from "./types";
import { IOptionProps } from "../Form/types";
import { ArrowLongLeftIcon, ArrowLongRightIcon } from "@heroicons/react/24/outline";

function Pagination({
  pageCount,
  onPageChange,
  previousLabel,
  nextLabel,
  pageClassName,
  pageLinkClassName,
  previousClassName,
  previousLinkClassName,
  nextClassName,
  nextLinkClassName,
  breakLabel,
  breakClassName,
  breakLinkClassName,
  containerClassName,
  activeClassName,
  renderOnZeroPageCount,
}: IPaginationProps) {
  const handlePageClick = (event: { selected: number }) => {
    onPageChange({ selected: event.selected });
  };

  return (
    <ReactPaginate
      nextLabel={nextLabel}
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      pageCount={pageCount}
      previousLabel={previousLabel}
      pageClassName={pageClassName}
      pageLinkClassName={pageLinkClassName}
      previousClassName={previousClassName}
      previousLinkClassName={previousLinkClassName}
      nextClassName={nextClassName}
      nextLinkClassName={nextLinkClassName}
      breakLabel={breakLabel}
      breakClassName={breakClassName}
      breakLinkClassName={breakLinkClassName}
      containerClassName={containerClassName}
      activeClassName={activeClassName}
      renderOnZeroPageCount={renderOnZeroPageCount}
    />
  );
}

function Items({ currentItems }: IItemsProps) {
  return (
    <div className="items grid grid-cols-2 xl:grid-cols-4 gap-5">
      {currentItems &&
        currentItems.map((item: IProductProps, index: number) => (
          <ProductOverViewCard isTextCenter={false} {...item} showStars={false} key={index} />
        ))}
    </div>
  );
}

function PaginatedItems({ items, itemsPerPage }: IPaginatedItemsProps) {
  const [currentItems, setCurrentItems] = useState<IProductProps[] | null>(items);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, items, itemsPerPage]);

  const handlePageChange = ({ selected }: { selected: number }) => {
    const newOffset = (selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <Pagination
        onPageChange={handlePageChange}
        pageCount={pageCount}
        previousLabel={<ArrowLongLeftIcon width={25} height={25} />}
        nextLabel={<ArrowLongRightIcon width={25} height={25} />}
        pageClassName="page-item"
        pageLinkClassName="shadow-[0px_0px_8px_0px_#3227C114] h-8 w-8 lg:h-12 lg:w-12 text-sm lg:text-base rounded-full flex justify-center items-center text-light font-black hover:bg-secondary hover:text-white hover:border-0"
        previousClassName="page-item"
        previousLinkClassName=" h-8 w-8 lg:h-12 lg:w-12 text-sm lg:text-base rounded-full flex justify-center items-center text-secondary font-black hover:bg-secondary hover:text-white hover:border-0"
        nextClassName="page-item"
        nextLinkClassName="h-8 w-8 lg:h-12 lg:w-12 text-sm lg:text-base rounded-full flex justify-center items-center text-secondary font-black hover:bg-secondary hover:text-white hover:border-0"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="border h-8 w-8 lg:h-12 lg:w-12 text-sm lg:text-base rounded-full flex justify-center items-center text-light font-black hover:bg-secondary hover:text-white hover:border-0"
        containerClassName="my-5  flex justify-between max-w-lg mx-auto "
        activeClassName=" border h-8 w-8 lg:h-12 lg:w-12 text-sm lg:text-base rounded-full text-white paginationActive"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default function ProductsGrid({ gridData, children }: { gridData: IProductProps[]; children: React.ReactElement<any> }) {
  const [sortedGridData, setSortedGridData] = useState(gridData);
  const [selected, setSelected] = useState<IOptionProps>();

  const handleSelect = (event: IOptionProps) => {
    setSelected(event);
    sortGridData(event.value);
  };

  useEffect(() => {
    setSortedGridData(gridData);
  }, [gridData]);

  const sortGridData = (value: string) => {
    let sortedData = [...gridData];

    if (value === "popularity") {
      sortedData.sort((a, b) => b.stars - a.stars);
    } else if (value === "lowToHigh") {
      sortedData.sort((a, b) => parseFloat(a.price.replace("$", "")) - parseFloat(b.price.replace("$", "")));
    } else if (value === "highToLow") {
      sortedData.sort((a, b) => parseFloat(b.price.replace("$", "")) - parseFloat(a.price.replace("$", "")));
    }

    setSortedGridData(sortedData);
  };

  return (
    <div className="my-10">
      <div className="mb-10 flex justify-end space-x-2">
        <SelectField selectData={selectData} handleSelect={handleSelect} selected={selected} />
        {children}
      </div>
      <PaginatedItems items={sortedGridData} itemsPerPage={12} />
    </div>
  );
}
