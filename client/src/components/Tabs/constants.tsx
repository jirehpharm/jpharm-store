import Description from "../Products/ProductTab/Description";
import { AiFillHome } from "react-icons/ai";
import { HiDocumentText } from "react-icons/hi2";
import { BiDownload } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import { MdAccountCircle } from "react-icons/md";
import { HTabsProp } from "./types";
import Table from "../Products/ProductTab/Table";
import { additionalInfo, reviewData } from "../Products/constant";
import Reviews from "../Products/ProductTab/Reviews";
import Address from "../MyAccount/Address";
import Orders from "../MyAccount/Orders";
import Download from "../MyAccount/Download";
import { addressData, downloadData, ordersData } from "../MyAccount/constants";
import SectionBackground from "../Common/SectionBackground";
import AccountDetails from "../MyAccount/AccountDetails";
import ProductDetail from "../Products/ProductTab/ProductDetail";
import RefundInformation from "../Products/ProductTab/RefundInformation";
import ShipmentInformation from "../Products/ProductTab/ShipmentInformation";
import WriteInquiry from "../Products/ProductTab/WriteInquiry";
import { InquiryData } from "../Products/ProductTab/constant";

export const tabsData: HTabsProp[] = [
  {
    tabTitle: "Description",
    title: "Description",
    content: <ProductDetail />
  },
  {
    tabTitle: "Product Inquiry",
    title: "Product Inquiry",
    content: <WriteInquiry data={InquiryData} />,
  },
  {
    tabTitle: "Additional Information",
    title: "Additional Information",
    content: <Table tableData={additionalInfo} />,
  },
  {
    tabTitle: "Reviews",
    title: "Customer Reviews",
    content: <Reviews reviewData={reviewData} />,
  },
  {
    tabTitle: "Shipment Information",
    title: "Shipment Information",
    content: <ShipmentInformation />,
  },
  {
    tabTitle: "Refund Information",
    title: "Refund Information",
    content: <RefundInformation />,
  },
];

export const verticalTabData = [
  {
    title: "Dashboard",
    icon: AiFillHome,
    content: (
      <>
        <SectionBackground>
          <>
            Hello <b>UserName</b> {"("}not <b>UserName?</b> Log out {")"}
          </>
        </SectionBackground>
        <SectionBackground>
          <>
            From your account dashboard you can view your recent orders, manage
            your shipping and billing addresses, and edit your password and
            account details.
          </>
        </SectionBackground>
      </>
    ),
  },
  {
    title: "Order",
    icon: HiDocumentText,
    content: <Orders ordersData={ordersData} />,
  },
  {
    title: "Download",
    icon: BiDownload,
    content: <Download downloadData={downloadData} />,
  },
  {
    title: "Address",
    icon: IoLocationSharp,
    content: (
      <>
        <SectionBackground>
          <>
            The following addresses will be used on the checkout page by
            default.
          </>
        </SectionBackground>
        <Address data={addressData} />
      </>
    ),
  },
  {
    title: "Account Details",
    icon: MdAccountCircle,
    content: (
      <>
        <SectionBackground>
          <>
            The following addresses will be used on the checkout page by
            default.
          </>
        </SectionBackground>
        <AccountDetails />
      </>
    ),
  },
  {
    title: "Logout",
    icon: TbLogout,
    content: (
      <Description
        content={`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    <br/><br/>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
    <br/><br/>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
    <br/><br/>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat`}
      />
    ),
  },
];
