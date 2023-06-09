import React from "react";

export default function ProductOverView() {
  return (
    <div className="ltn__product-item ltn__product-item-3 text-left">
      <div className="product-img">
        <a href="product-details.html">
          <img src="img/product/10.png" alt="#" />
        </a>
        <div className="product-badge">
          <ul>
            <li className="sale-badge">New</li>
          </ul>
        </div>
        <div className="product-hover-action">
          <ul>
            <li>
              <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
                <i className="far fa-eye"></i>
              </a>
            </li>
            <li>
              <a href="#" title="Add to Cart" data-bs-toggle="modal" data-bs-target="#add_to_cart_modal">
                <i className="fas fa-shopping-cart"></i>
              </a>
            </li>
            <li>
              <a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
                <i className="far fa-heart"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="product-info">
        <div className="product-ratting">
          <ul>
            <li>
              <a href="#">
                <i className="fas fa-star"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-star"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-star"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-star-half-alt"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="far fa-star"></i>
              </a>
            </li>
          </ul>
        </div>
        <h2 className="product-title">
          <a href="product-details.html">Antiseptic Spray</a>
        </h2>
        <div className="product-price">
          <span>$32.00</span>
          <del>$46.00</del>
        </div>
      </div>
    </div>
  );
}
