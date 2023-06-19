import { useState } from "react";
import Faq from "../components/Faq";
import BreadcrumbBanner from "../components/Common/BreadcrumbBanner";
import WidgetLayout from "../components/Products/WidgetLayout";
import Search from "../components/Products/Search";
import SaleWidgetCard from "../components/Cards/SaleWidgetCard/saleWidgetCard";
import { salesWidgetCard } from "../components/Cards/SaleWidgetCard/constants";
import { faqCategory } from "../components/Faq/constants";

export default function Faqs() {
  const [searchText, setSearchText] = useState("");
  console.log(
    "%c 🍿 searchText: ",
    "font-size:12px;background-color: #7F2B82;color:#fff;",
    searchText
  );

  return (
    <div>
      <BreadcrumbBanner title={"Frequently asked questions"} />
      <div className="grid grid-cols-6 gap-5 max-w-6xl mx-auto">
        <div className="col-span-4 my-10">
          <Faq faqCategory={faqCategory}></Faq>
        </div>
        <div className="col-span-2 my-10">
          <WidgetLayout title={"Search Objects"}>
            <Search setSearchText={setSearchText} />
          </WidgetLayout>
          <SaleWidgetCard saleWidgetCard={salesWidgetCard} />
        </div>
      </div>
    </div>
  );
}
