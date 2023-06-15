import ContentCard from "./ContentCard";
import RadioButton from "./RadioButton";

export const paymentDetails = [
  {
    head: <RadioButton name={"payment"} title={"Check payments"} />,
    content: <ContentCard description={"Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode."} />,
  },
  {
    head: <RadioButton name={"delivery"} title={"Cash on delivery"} />,
    content: <ContentCard description={"Pay with cash upon delivery."} />,
  },
  {
    head: <RadioButton name={"pay"} title={"PayPal"} icon={"/payment.png"} />,
    content: <ContentCard description={"Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account."} />,
  },
];
export const selectData = [
  { id: 0, label: "Select Country", value: "selectCountry" },
  { id: 1, label: "Australia", value: "australia" },
  { id: 2, label: "Canada", value: "canada" },
  { id: 3, label: "China", value: "china" },
  { id: 4, label: "Korea", value: "korea" },
  { id: 5, label: "UK", value: "uk" },
  { id: 6, label: "US", value: "us" },
];
