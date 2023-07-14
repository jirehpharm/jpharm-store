import BreadcrumbBanner from "../components/Common/BreadcrumbBanner";
import { InquiryTabs } from "../components/Inquiry/InquiryTabs";
import { inquiryTabsData } from "../components/Inquiry/constants";

export default function CustomerInquiry() {
  return (
    <div>
      <BreadcrumbBanner title={"Inquiry"} />
      <InquiryTabs tabsData={inquiryTabsData} />
    </div>
  )
}
