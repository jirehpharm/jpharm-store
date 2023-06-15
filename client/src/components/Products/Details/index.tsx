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
  return (
    <div className="grid grid-cols-2 gap-4 pr-4">
      <div className="px-5">
        <img src="/placeholder/600x701.png" alt="600x701" />
        <Carousel slidesPerView={4} slides={content} />
      </div>
      <div>
        <div className="flex items-center">
          {getStars({ stars: 4 || 0 })}{" "}
          <div className="ml-4 text-gray-400 font-medium text-sm">{`(1 Customer Review)`}</div>
        </div>
        <h2 className="text-2xl">Hand Sanitizer</h2>
        <div className="flex items-center space-x-4 border-b border-gray-200 pb-4">
          <p className="text-secondary font-bold text-4xl mb-0"> $32.00</p>
          <p className="text-secondary font-bold text-3xl line-through opacity-60 mb-0">
            $46.00
          </p>
        </div>
        <div className="grid grid-cols-4 border-b border-gray-200 py-5">
          <p className="mb-0 text-sm col-span-1">Categories:</p>
          <h6 className="mb-0 text-sm text-light col-span-3">
            {`face-mask, ppe-kit, safety-suits`}
          </h6>
        </div>

        {/* Add To Cart */}
        <div className="flex items-center justify-between space-x-4 pt-4">
          <Counter />
          <Button className="flex items-center">
            <BsCartFill className="h-4 w-4 inline mr-2" />
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
          <p className="mb-0 text-light">Share:</p>
          <SocialLinks socialData={socialData} />
        </div>
        <div className="pt-2 my-auto border-b border-gray-100">
          <h5 className="mb-3">Guaranteed Safe Checkout</h5>
          <img
            src="http://127.0.0.1:5501/vicodin/img/icons/payment-2.png"
            alt="image"
          />
        </div>
      </div>
    </div>
  );
}
