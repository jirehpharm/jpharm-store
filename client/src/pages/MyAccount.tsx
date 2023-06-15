import BreadcrumbBanner from "../components/Common/BreadcrumbBanner";
import VerticalTab from "../components/Common/VerticalTabs";
import { verticalTabData } from "../components/Common/constants";

export default function MyAccount() {
  return (
    <div>
      <BreadcrumbBanner title={"My Account"} />
      <VerticalTab tabsData={verticalTabData} />
    </div>
  )
}
