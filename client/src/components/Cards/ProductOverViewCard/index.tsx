import { AiOutlineEye, AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import getStars from "../../getStars";
import { IProductProps } from "./types";

export default function ProductOverViewCard({
  showStars = true,
  isTextCenter = false,
  isNew = false,
  image = "",
  quickView = "#",
  addToCard = "#",
  wishlist = "#",
  stars = 1,
  productName = "",
  price = "",
  originalPrice = "",
}: IProductProps) {
  return (
    <div className="">
      <div className="ltn__product-item relative ltn__product-item-3 text-left hover:shadow-xl ">
      <div className="product-img relative">
        <a href="product-details">
          <img src={image} alt="#" />
        </a>
        {isNew && (
          <div className="product-badge">
            <ul>
              <li className="sale-badge">New</li>
            </ul>
          </div>
        )}
        <div className="product-hover-action">
          <ul>
            <li>
              <a href={quickView} title="Quick View" data-bs-toggle="modal" className="h-full" data-bs-target="#quick_view_modal">
                <AiOutlineEye size={20} />
              </a>
            </li>
            <li>
              <a href={addToCard} title="Add to Cart" data-bs-toggle="modal" data-bs-target="#add_to_cart_modal">
                <AiOutlineShoppingCart size={20} />
              </a>
            </li>
            <li>
              <a href={wishlist} title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
                <AiOutlineHeart size={20} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={`product-info ${isTextCenter ? "text-center" : ""}`}>
        {showStars && <div className={`flex ${isTextCenter ? "text-center" : ""}`}>{getStars({ stars })}</div>}
        <h2 className="product-title text-base">
          <a href="product-details" className="text-primary hover:text-secondary">
            {productName}
          </a>
        </h2>
        <div className="product-price text-sm font-nunito">
          <span>{price}</span> <del>{originalPrice}</del>
        </div>
      </div>
    </div>
    </div>
    
  );
}
