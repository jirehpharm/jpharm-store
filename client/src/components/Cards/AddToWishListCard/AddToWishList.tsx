import { MdCheckCircle } from "react-icons/md";

import { IAddToWishListCardProps } from "./types";

interface IAddToWish {
  wishList: IAddToWishListCardProps;
}

export default function AddToWishList(props: IAddToWish) {
  const { wishList } = props;
  return (
    <>
      <div className="">
        <div className="grid grid-cols-6 z-10">
          <div className="float-left col-span-2">
            <img src={wishList.imgSrc} alt="#" />
          </div>
          <div className="p-1 ml-7 md:pl-6 mb-2 leading-[1.2] font-bold grid col-span-4">
            <h5>
              <a href={wishList.productLink} className="text-primary text-base">
                {wishList.title}
              </a>
            </h5>
            <p className="text-sm leading-0 lg:text-xl text-light font-medium sm:flex md:flex lg:flex mb-0">
              <MdCheckCircle className="text-secondary text-3xl pr-2" />{" "}
              Successfully added to your Wishlist
            </p>
            <div className="btn-wrapper">
              <a href={wishList.wishListLink} className="btn">
                View Wishlist
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
