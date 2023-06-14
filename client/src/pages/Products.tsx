import { useState, useEffect } from "react";

import BreadcrumbBanner from "../components/Common/BreadcrumbBanner";
import Categories from "../components/Products/Categories";
import ProductsGrid from "../components/Products/ProductsGrid";
import WidgetLayout from "../components/Products/WidgetLayout";
import { gridData, listData } from "../components/Products/constant";
import PriceRange from "../components/Products/PriceRange";
import Search from "../components/Products/Search";
import { get } from "lodash";

export default function Products() {
  const [sortedGridData, setSortedGridData] = useState(gridData);
  const [searchText, setSearchText] = useState("");
  const [range, setRange] = useState({
    highestPrice: 0,
    lowestPrice: 0,
  });

  useEffect(() => {
    // Filter the gridData based on the search text and price range
    const filteredData = gridData.filter((item) => {
      const productName = item.productName.toLowerCase();
      const price = parseFloat(item.price.replace("$", ""));
      const isMatchingSearch = productName.includes(searchText.toLowerCase());
      const isWithinPriceRange = price >= range.lowestPrice && price <= range.highestPrice;
      return isMatchingSearch && isWithinPriceRange;
    });

    setSortedGridData(filteredData);
  }, [searchText, range]);

  let highestPrice = parseFloat(get(gridData, "[0].price", "").replace("$", ""));
  let lowestPrice = parseFloat(get(gridData, "[0].price", "").replace("$", ""));

  for (let i = 1; i < gridData.length; i++) {
    const price = parseFloat(gridData[i].price.replace("$", ""));
    if (price > highestPrice) {
      highestPrice = price;
    }
    if (price < lowestPrice) {
      lowestPrice = price;
    }
  }

  useEffect(() => {
    setRange({
      highestPrice,
      lowestPrice,
    });
  }, []);

  return (
    <div>
      <BreadcrumbBanner title={"Antiseptic Spray"} />
      <div className="grid grid-cols-6 gap-5 max-w-6xl mx-auto">
        <div className="col-span-4">
          <ProductsGrid gridData={sortedGridData} />
        </div>
        <div className="col-span-2 my-10">
          <Categories title={"Product Categories"} list={listData} />
          <WidgetLayout title={"Filter By Price"}>
            <PriceRange highestPrice={highestPrice} lowestPrice={lowestPrice} setRange={setRange} range={range} />
          </WidgetLayout>
          <WidgetLayout title={"Search Objects"}>
            <Search setSearchText={setSearchText} />
          </WidgetLayout>
        </div>
      </div>
    </div>
  );
}
