import { BsCart3 } from "react-icons/bs";
import CartItems from "./CartItems";
import { ICartTabsProp } from "./types";

export const cartData = [
  {
    image: "/placeholder/600x701.png",
    title: "Hand Gloves",
    price: "$20"
  },
  {
    image: "/placeholder/600x701.png",
    title: "Hand Gloves",
    price: "$20"
  },
  {
    image: "/placeholder/600x701.png",
    title: "Hand Gloves",
    price: "$20"
  }
];

export const cardTotalData = [
  {
    title: "Cart Subtotal",
    price: "$20"
  },
  {
    title: "Shipping and Handing",
    price: "$20"
  },
  {
    title: "Vat",
    price: "$20"
  },
  {
    title: "Order Total",
    price: "$20"
  }
];

export const cartTabData: ICartTabsProp[] = [
  {
    tabTitle: "Cart 1",
    icon: BsCart3,
    title: "Cart 1",
    content: <CartItems data={cartData} />
  },
  {
    tabTitle: "Cart 2",
    icon: BsCart3,
    title: "Cart 2",
    content: <CartItems data={cartData} />
  },
  {
    tabTitle: "Cart 3",
    icon: BsCart3,
    title: "Cart 3",
    content: <CartItems data={cartData} />
  },
  {
    tabTitle: "Cart 4",
    icon: BsCart3,
    title: "Cart 4",
    content: <CartItems data={cartData} />
  },
  {
    tabTitle: "Cart 5",
    icon: BsCart3,
    title: "Cart 5",
    content: <CartItems data={cartData} />
  },
  {
    tabTitle: "Cart 6",
    icon: BsCart3,
    title: "Cart 6",
    content: <CartItems data={cartData} />
  }
];
