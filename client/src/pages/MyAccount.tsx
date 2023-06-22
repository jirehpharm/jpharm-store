import BreadcrumbBanner from "../components/Common/BreadcrumbBanner";
import VerticalTab from "../components/Tabs/VerticalTabs";
import { verticalTabData } from "../components/Tabs/constants";

export default function MyAccount() {
  return (
    <div>
      <BreadcrumbBanner title={"My Account"} />
      <VerticalTab tabsData={verticalTabData} />
    </div>
  )
}
