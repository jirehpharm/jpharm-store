import ProductOverViewCard from "../Cards/ProductOverViewCard";
import { IProductProps } from "../Home/types";

import ReactPaginate from "react-paginate";
import React, { useEffect, useState } from "react";
import { IItemsProps, IPaginatedItemsProps, IPaginationProps } from "./types";
import SelectField from "../Form/SelectField";
import { selectData } from "./constant";
import { OptionProps } from "../Form/types";

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
    <div className="items grid grid-cols-3 gap-5">
      {currentItems &&
        currentItems.map((item: IProductProps, index: number) => <ProductOverViewCard isTextCenter={false} {...item} showStars={true} key={index} />)}
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
        previousLabel="<<"
        nextLabel=">>"
        pageClassName="page-item"
        pageLinkClassName="border h-12 w-12  rounded-full flex justify-center items-center text-light font-black hover:bg-secondary hover:text-white hover:border-0"
        previousClassName="page-item"
        previousLinkClassName="border h-12 w-12  rounded-full flex justify-center items-center text-light font-black hover:bg-secondary hover:text-white hover:border-0"
        nextClassName="page-item"
        nextLinkClassName="border h-12 w-12  rounded-full flex justify-center items-center text-light font-black hover:bg-secondary hover:text-white hover:border-0"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="border h-12 w-12  rounded-full flex justify-center items-center text-light font-black hover:bg-secondary hover:text-white hover:border-0"
        containerClassName="my-5  flex justify-between max-w-lg mx-auto "
        activeClassName=" border h-12 w-12  rounded-full text-white paginationActive"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default function ProductsGrid({ gridData }: { gridData: IProductProps[] }) {
  const [sortedGridData, setSortedGridData] = useState(gridData);
  const [selected, setSelected] = useState<OptionProps>();

  const handleSelect = (event: OptionProps) => {
    setSelected(event);
    sortGridData(event.name);
  };

  useEffect(() => {
    setSortedGridData(gridData);
  }, [gridData]);

  const sortGridData = (value: string) => {
    let sortedData = [...gridData];

    if (value === "Sort by popularity") {
      sortedData.sort((a, b) => b.stars - a.stars);
    } else if (value === "Sort by price: low to high") {
      sortedData.sort((a, b) => parseFloat(a.price.replace("$", "")) - parseFloat(b.price.replace("$", "")));
    } else if (value === "Sort by price: high to low") {
      sortedData.sort((a, b) => parseFloat(b.price.replace("$", "")) - parseFloat(a.price.replace("$", "")));
    }

    setSortedGridData(sortedData);
  };

  return (
    <div className="my-10">
      <div className="mb-10 flex justify-end">
        <SelectField selectData={selectData} handleSelect={handleSelect} selected={selected} />
      </div>
      <PaginatedItems items={sortedGridData} itemsPerPage={9} />
    </div>
  );
}
