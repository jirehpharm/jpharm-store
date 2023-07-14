import { InquiryTabsProp } from "./types";
import RefundInformation from "../Products/ProductTab/RefundInformation";

export const inquiryTabsData: InquiryTabsProp[] = [
  {
    tabTitle: "All",
    title: "All",
    content: <RefundInformation refundData={`Table`} />,
  },
  {
    tabTitle: "Order",
    title: "Order",
    content: <RefundInformation refundData={`Table`} />,
  },
  {
    tabTitle: "Shipment",
    title: "Shipment",
    content: <RefundInformation refundData={`Table`} />,
  },
  {
    tabTitle: "Product",
    title: "Product",
    content: <RefundInformation refundData={`Table`} />,
  },
  {
    tabTitle: "Return/Refund",
    title: "Return/Refund",
    content: <RefundInformation refundData={`Table`} />,
  },
  {
    tabTitle: "Document",
    title: "Document",
    content: <RefundInformation refundData={`Table`} />,
  },
  {
    tabTitle: "Else",
    title: "Else",
    content: <RefundInformation refundData={`Table`} />,
  },
  {
    tabTitle: "View my write",
    title: "View my write",
    content: <RefundInformation refundData={`Table`} />,
  },
];