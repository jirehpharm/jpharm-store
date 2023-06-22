import {
  BsCheckSquareFill,
  BsFillGiftFill,
  BsPersonFillAdd,
} from "react-icons/bs";
import {
  FaHandHoldingMedical,
  FaMapMarkedAlt,
  FaMicroscope,
  FaStethoscope,
} from "react-icons/fa";
import { MdTableBar } from "react-icons/md";

import { IPartnersProps } from "./types";

export const questionCategory = [
  {
    categoryName: "",
    faq: [
      {
        head: (
          <div>
            <p className="mb-0 text-lg text-left px-4">How to join?</p>
          </div>
        ),
        content: (
          <div className="mt-4 mb-0">
            <p>
              You sign up as a member by entering the terms of use, consent to
              the privacy policy, and a certain form of subscription through the
              {"[Membership Registration]"} menu, and you can use the service
              for free as soon as you sign up.
            </p>
            <p className="mb-0">
              You do not have to enter all the information you need to enter
              when placing an order. You can always participate in joint
              purchases and auction events. You can participate in events and
              various discount events for members.
            </p>
          </div>
        ),
      },
      {
        head: (
          <div>
            <p className="mb-0 text-lg text-left px-4">How to order?</p>
          </div>
        ),
        content: (
          <div className="mt-4 mb-0">
            <p>A product order is made in the following steps.</p>
            <ul className="mb-3 text-primary">
              <li>Step1: Search products</li>
              <li>Step2: Add to cart</li>
              <li>Step3: Log in to member ID or order as a non-member</li>
              <li>Step4: Fill out the order form</li>
              <li>Step5: Select a payment method and pay</li>
              <li>Step6: Order success screen {"(order number)"}</li>
            </ul>
            <p className="mb-0">
              Please make a note of your order number and approval number (when
              paying by credit card). However, if you are a member, you do not
              need to manage it separately as it is automatically saved.
            </p>
          </div>
        ),
      },
      {
        head: (
          <div>
            <p className="mb-0 text-lg text-left px-4">Payment</p>
          </div>
        ),
        content: (
          <div className="mt-4 mb-0">
            <p>
              In the case of a large payment, the credit card company may call
              to confirm for safety. During the verification process, if it is
              determined that the order is not normal, such as the use of a
              stolen card or an order in the name of another person, the order
              may be suspended or canceled at will.
            </p>
            <p className="mb-0">
              For deposit without a bankbook, the purchase price can be
              deposited directly through PC banking, Internet banking,
              telebanking, or at a nearby bank. The name of the depositor
              entered at the time of ordering must match the name of the actual
              depositor.
            </p>
          </div>
        ),
      },
      {
        head: (
          <div>
            <p className="mb-0 text-lg text-left px-4">Shipping</p>
          </div>
        ),
        content: (
          <div className="mt-4 mb-0">
            <p>Shipping Method: Courier</p>
            <p>Shipping Area : Nationwide</p>
            <p>
              Shipping Rate : Conditional Free : Add 2,500 won for shipping when
              the order amount is less than 100,000 won.
            </p>
            <p>Delivery Time: 3 to 7 day</p>
            <p className="mb-0">
              In some cases, you may have to pay extra for mountainous or island
              areas. The product you ordered will be shipped after payment is
              confirmed. However, depending on the product type, product
              delivery may be slightly delayed.
            </p>
          </div>
        ),
      },
      {
        head: (
          <div>
            <p className="mb-0 text-lg text-left px-4">Refunds</p>
          </div>
        ),
        content: (
          <div className="mt-4 mb-0">
            <p className="mb-0">
              In the case of a refund, we will refund the payment amount within
              3 business days after confirming the return confirmation. If you
              paid by credit card, we will cancel the credit card authorization
              so that you will not be charged. (However, if the payment can be
              charged according to the credit card payment date, in this case,
              the credit card company will refund the next month's credit card
              payment .)
            </p>
          </div>
        ),
      },
    ],
  },
];

export const testimonialsData = [
  {
    name: "Rosalina D. William",
    post: "Founder",
    image: "/placeholder/about-page-testimonials.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Rosalina D. William",
    post: "Founder",
    image: "/placeholder/about-page-testimonials2.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Rosalina D. William",
    post: "Founder",
    image: "/placeholder/about-page-testimonials.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Rosalina D. William",
    post: "Founder",
    image: "/placeholder/about-page-testimonials2.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
export const whyChooseUsData = [
  {
    icon: FaHandHoldingMedical,
    title: "All Kind Brand",
    description:
      "Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.",
  },
  {
    icon: FaMicroscope,
    title: "Curated Products",
    description:
      "Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.",
  },
  {
    icon: FaStethoscope,
    title: "Pesticide Free Goods",
    description:
      "Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.",
  },
];

export const statsData = [
  {
    icon: BsPersonFillAdd,
    number: "733+",
    description: "Active Clients",
  },
  {
    icon: MdTableBar,
    number: "33K+",
    description: "Cup Of Coffee",
  },
  {
    icon: BsFillGiftFill,
    number: "100+",
    description: "Get Rewards",
  },
  {
    icon: FaMapMarkedAlt,
    number: "21+",
    description: "Country Cover",
  },
];

export const listData = [
  {
    icon: BsCheckSquareFill,
    title: "Better security for patient privacy and information.",
  },
  {
    icon: BsCheckSquareFill,
    title: "More products at lower prices.",
  },
  {
    icon: BsCheckSquareFill,
    title: "connect customers with the power of eCommerce at all.",
  },
];

export const partnersData: IPartnersProps = {
  image: "/img/about/partner.png",
  title: "Your faithful partners Medical Goods",
  description:
    "Houzez allow you to design unlimited panels and real estate custom forms to capture leads and keep record of all information",
  list: listData,
  name: "Jerry Henson",
  field: "Medical Specialist",
  authorImg: "/img/about/author.jpg",
};
