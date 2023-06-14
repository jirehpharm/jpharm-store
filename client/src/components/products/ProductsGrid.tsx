import ProductOverViewCard from "../Cards/ProductOverViewCard";
import { IProductProps } from "../Home/types";
import { gridData } from "./constant";

import ReactPaginate from "react-paginate";
import React, { useEffect, useState } from "react";
import { IItemsProps, IPaginatedItemsProps, IPaginationProps } from "./types";

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
        currentItems.map((item: IProductProps, index: number) => (
          <ProductOverViewCard
            isTextCenter={false}
            {...item}
            showStars={true}
            key={index}
          />
        ))}
    </div>
  );
}

function PaginatedItems({ items, itemsPerPage }: IPaginatedItemsProps) {
  const [currentItems, setCurrentItems] = useState<IProductProps[] | null>(
    null
  );
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

export default function ProductsGrid() {
  const [selectedSortOption, setSelectedSortOption] =
    useState<string>("default");
  const [sortedGridData, setSortedGridData] = useState(gridData);
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedSortOption(value);
    sortGridData(value);
  };

  const sortGridData = (value: string) => {
    let sortedData = [...gridData];

    if (value === "popularity") {
      sortedData.sort((a, b) => b.stars - a.stars);
    } else if (value === "low to high") {
      sortedData.sort(
        (a, b) =>
          parseFloat(a.price.replace("$", "")) -
          parseFloat(b.price.replace("$", ""))
      );
    } else if (value === "high to low") {
      sortedData.sort(
        (a, b) =>
          parseFloat(b.price.replace("$", "")) -
          parseFloat(a.price.replace("$", ""))
      );
    }

    setSortedGridData(sortedData);
  };

  return (
    <div className="my-10">
      <div className="mb-10 flex justify-end">
        <select
          className="leading-[1.8] mt-0 py-2.5 bg-white border-2 border-borderColor"
          value={selectedSortOption}
          onChange={handleSortChange}
        >
          <option value="default">Default sorting</option>
          <option value={"popularity"}>Sort by popularity</option>
          <option value={"low to high"}>Sort by price: low to high</option>
          <option value={"high to low"}>Sort by price: high to low</option>
        </select>
      </div>
      <PaginatedItems items={sortedGridData} itemsPerPage={9} />
    </div>
  );
}
