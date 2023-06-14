import { useState, useEffect } from "react";
import BreadcrumbBanner from "../components/Common/BreadcrumbBanner";
import Categories from "../components/Products/Categories";
import ProductsGrid from "../components/Products/ProductsGrid";
import WidgetLayout from "../components/Products/WidgetLayout";
import { gridData, listData } from "../components/Products/constant";
import PriceRange from "../components/Products/PriceRange";
import SaleWidgetCard from "../components/Cards/SaleWidgetCard/saleWidgetCard";
import { salesWidgetCard } from "../components/Cards/SaleWidgetCard/constants";

export default function Products() {
  const [sortedGridData, setSortedGridData] = useState(gridData);
  let highestPrice = parseFloat(gridData[0].price.replace("$", ""));
  let lowestPrice = parseFloat(gridData[0].price.replace("$", ""));
  for (let i = 1; i < gridData.length; i++) {
    const price = parseFloat(gridData[i].price.replace("$", ""));
    if (price > highestPrice) {
      highestPrice = price;
    }
    if (price < lowestPrice) {
      lowestPrice = price;
    }
  }
  const [range, setRange] = useState({
    highestPrice,
    lowestPrice,
  });

  useEffect(() => {
    const filteredData = gridData.filter((item) => {
      const price = parseFloat(item.price.replace("$", ""));
      return price >= range.lowestPrice && price <= range.highestPrice;
    });
    setSortedGridData(filteredData);
  }, [range]);
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
          <SaleWidgetCard saleWidgetCard={[salesWidgetCard]} />
        </div>
      </div>
    </div>
  );
}
