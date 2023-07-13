import { FaUser } from "react-icons/fa";
import { IPrimaryNavProps } from "./types";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { TbLogout } from "react-icons/tb";

export const PrimaryNavData: IPrimaryNavProps[] = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "New Products",
    link: "#",
  },
  {
    title: "Medicines",
    link: "#",
  },
  {
    title: "Quasi-drug",
    link: "#",
  },
  {
    title: "Educational Materials",
    link: "#",
  },
  {
    title: "Cleaning Materials",
    link: "#",
  },
];

export const disclosureData = [
  {
    title: "Your Profile",
    link: "#",
    icon: FaUser,
  },
  {
    title: "Wish List",
    link: "#",
    icon: AiOutlineHeart,
  },
  {
    title: "Shopping Cart",
    link: "#",
    icon: AiOutlineShoppingCart,
  },
  {
    title: "Sign Out",
    link: "#",
    icon: TbLogout,
  },
];
