import { GiCampingTent } from "react-icons/gi";
import { TbDental } from "react-icons/tb";
import { FiTarget } from "react-icons/fi";
import { BsStack } from "react-icons/bs";

import { ICategory, INavData, INavList, INavSubListGroup } from "./types";

export const coldMedicine: INavData[] = [
  {
    title: "Herbal",
    link: "#",
  },
  {
    title: "Sore throat",
    link: "#",
  },
];

export const digestive: INavData[] = [
  {
    title: "Digestive enzymes",
    link: "#",
  },
];

export const bandages: INavData[] = [
  {
    title: "Tick/pest avoidance",
    link: "#",
  },
  {
    title: "Wet band",
    link: "#",
  },
  {
    title: "Dressing bands",
    link: "#",
  },
  {
    title: "Disposal band",
    link: "#",
  },
];

export const hygiene: INavData[] = [
  {
    title: "General Facilities and equipment",
    link: "#",
  },
  {
    title: "Cold/warm appliance",
    link: "#",
  },
];

export const shopList: INavSubListGroup[] = [
  {
    title: "Cold Medicine",
    link: "#",
    subList: coldMedicine,
  },
  {
    title: "Wound/disinfection",
    link: "#",
  },
  {
    title: "Digestive",
    link: "#",
    subList: digestive,
  },
  {
    title: "Heartburn",
    link: "#",
  },
];

export const CategoryOptions:ICategory[] = [
  {
    title: "Medical Cap",
    link: "#",
    icon: GiCampingTent,
  },
  {
    title: "Dental",
    link: "#",
    icon: TbDental,
  },
  {
    title: "Best Deals",
    link: "#",
    icon: FiTarget,
  },
  {
    title: "All Products",
    link: "#",
    icon: BsStack,
  },
];

export const navbarData: INavList = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "#",
  },
  {
    title: "Shop",
    link: "",
    list: shopList,
  },
  {
    title: "Bandages",
    link: "",
    list: coldMedicine,
  },
  {
    title: "Hygiene",
    link: "",
    list: hygiene,
  },
  {
    title: "Contact",
    link: "#",
  },
];
