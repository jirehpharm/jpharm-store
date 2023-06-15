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
  { id: 1, name: 'Australia' },
  { id: 2, name: 'Canada' },
  { id: 3, name: 'China' },
  { id: 4, name: 'Korea' },
  { id: 5, name: 'UK' },
  { id: 6, name: 'US' },
]