import { MdCheckCircle } from "react-icons/md";

import { IAddToWishListCardProps } from "./types";

interface IAddToWish {
  addWhish: IAddToWishListCardProps;
}

export default function AddToWishList(props: IAddToWish) {
  const { addWhish } = props;
  return (
    <>
      <div className="">
        <div className="grid grid-cols-6">
          <div className="float-left mr-5  h-full col-span-2">
            <img src={addWhish.imgSrc} alt="#" />
          </div>
          <div className="flex flex-wrap pl-6 mb-2 leading-[1.2] font-bold col-span-4">
            <h5>
              <a href={addWhish.productLink} className="text-primary">
                {addWhish.title}
              </a>
            </h5>
            <p className="text-xl text-light font-thin flex mb-0">
              <MdCheckCircle className="text-secondary text-3xl pr-2" />{" "}
              Successfully added to your Wishlist
            </p>
            <div className="btn-wrapper pt-0">
              <a href={addWhish.wishListLink} className="btn">
                View Wishlist
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
