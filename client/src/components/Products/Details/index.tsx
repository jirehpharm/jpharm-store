import { BsCartFill } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { ArrowsRightLeftIcon, HeartIcon } from "@heroicons/react/24/outline";

import Counter from "./Counter";
import Button from "../../Common/Button";
import getStars from "../../getStars";
import Widgets from "./Widgets";
import SocialLinks from "../../Common/SocialLinks";
import { productPreview } from "../constant";
import Carousel from "../../Carousel";
import { IProductPreviewProps } from "./types";
import Modal from "../../Modal";
import AddToWishList from "../../Cards/AddToWishListCard/AddToWishList";
import { addWish } from "../../Cards/AddToWishListCard/constants";
import { get } from "lodash";

const socialData = [
  {
    url: "#",
    icon: FaFacebook,
  },
  {
    url: "#",
    icon: FaTwitter,
  },
  {
    url: "#",
    icon: FaLinkedin,
  },
  {
    url: "#",
    icon: FaInstagram,
  },
];

const content = productPreview?.map(
  (item: IProductPreviewProps, index: number) => (
    <div key={index} className="relative p-2">
      <img src={item.imgSrc} alt="image" className="h-20 w-20" />
    </div>
  )
);
export default function Detail() {
  const image = get(productPreview, "0.imgSrc", "");
  return (
    <div className="md:grid grid-cols-2 gap-4 pr-4">
      <div className="px-5">
        <img src={image} alt="600x701" />
        <Carousel slidesPerView={4} slides={content} />
      </div>
      <div className="mt-9 px-3">
        <div className="flex items-center text-xs lg:text-lg">
          {getStars({ stars: 4 || 0 })}
          <div className="ml-4 text-gray-400 font-medium text-xs lg:text-sm">{`(1 Customer Review)`}</div>
        </div>
        <h2 className="text-xl md:text-2xl lg:text-2xl">Hand Sanitizer</h2>
        <div className="flex items-center space-x-4 border-b border-gray-200 pb-4">
          <p className="text-secondary font-bold text-3xl md:text-4xl lg:text-4xl mb-0">
            {" "}
            $32.00
          </p>
          <p className="text-secondary font-bold text-2xl md:text-3xl lg:text-3xl line-through opacity-60 mb-0">
            $46.00
          </p>
        </div>
        <div className="flex lg:grid lgrid-cols-4 border-b border-gray-200 py-5">
          <p className="mb-0 text-sm col-span-1 pr-4">Categories:</p>
          <h6 className="mb-0 text-sm text-light col-span-3">
            {`face-mask, ppe-kit, safety-suits`}
          </h6>
        </div>

        {/* Add To Cart */}
        <div className="md:flex items-center justify-between md:space-x-4 pt-4">
          <Counter />
          <Button className="md:flex items-center">
            <BsCartFill className="h-5 w-5 inline " />
            ADD TO CART
          </Button>
        </div>
        <div className="flex space-x-6 py-4 border-b border-gray-100">
          <Modal
            ModalTrigger={
              <Widgets Icon={HeartIcon} tittle={"Add to Wishlist"} />
            }
            ModalTitle={<></>}
            ModalContent={<AddToWishList wishList={addWish} />}
          />
          <Widgets Icon={ArrowsRightLeftIcon} tittle={"Compare"} />
        </div>
        <div className="flex items-center space-x-6 py-4 border-b border-gray-100">
          <p className="mb-0 text-light text-sm lg:text-lg">Share:</p>
          <SocialLinks socialData={socialData} />
        </div>
        <div className="pt-2 my-auto border-b border-gray-100">
          <h5 className="mb-3 text-base lg:text-xl">
            Guaranteed Safe Checkout
          </h5>
          <img src="/payment-2.png" alt="image" />
        </div>
      </div>
    </div>
  );
}
