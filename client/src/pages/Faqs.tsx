import { useState } from "react";
import Faq from "../components/Faq";
import BreadcrumbBanner from "../components/Common/BreadcrumbBanner";
import WidgetLayout from "../components/Products/WidgetLayout";
import Search from "../components/Products/Search";
import SaleWidgetCard from "../components/Cards/SaleWidgetCard/saleWidgetCard";
import { salesWidgetCard } from "../components/Cards/SaleWidgetCard/constants";
import { faqCategory } from "../components/Faq/constants";
import Stats from "../components/About/Stats";
import { statsData } from "../components/About/content";
import TrendingBlog from "../components/Blog/TrendingBlog";
import { blogDetails } from "../components/Blog/constant";

export default function Faqs() {
  const [searchText, setSearchText] = useState("");
  console.log("%c 🍿 searchText: ", "font-size:12px;background-color: #7F2B82;color:#fff;", searchText);

  return (
    <div>
      <BreadcrumbBanner title={"Frequently asked questions"} />
      <div className="flex flex-col lg:grid grid-cols-6 gap-8 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl  mx-auto xl:max-w-6xl">
        <div className="col-span-4 lg:my-10 mx-2 sm:mx-0 my-5">
          <Faq faqCategory={faqCategory}></Faq>
        </div>
        <div className="col-span-2 lg:my-10 mx-2 sm:mx-0 my-5">
          <WidgetLayout title={"Search Objects"}>
            <Search setSearchText={setSearchText} />
          </WidgetLayout>
          <SaleWidgetCard saleWidgetCard={salesWidgetCard} />
        </div>
      </div>
      <Stats data={statsData} />
      <TrendingBlog blogDetails={blogDetails} />
    </div>
  );
}
