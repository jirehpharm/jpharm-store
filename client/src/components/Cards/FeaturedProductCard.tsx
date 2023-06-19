import getStars from "../getStars";

interface FeaturedProductCardProps {
  productName: string;
  discountedPrice?: string;
  originalPrice?: string;
  image?: string;
  stars?: number;
}

/**
 * Renders a featured product card.
 *
 * @param productName - The name of the product to display.
 * @param discountedPrice - The discounted price of the product.
 * @param originalPrice - The original price of the product.
 * @param image - The URL of the image to display for the product.
 * @param stars - The number of stars to display for the product.
 *
 * @returns The rendered product card.
 */
export default function FeaturedProductCard({
  productName,
  discountedPrice,
  image,
  originalPrice,
  stars,
}: FeaturedProductCardProps): JSX.Element {
  return (
    <div className="bg-white hover:shadow hover:shadow-light ">
      <a href="/product-details">
        <div className="border border-gray-300 px-2 py-6 flex items-center">
          <img src={image} className="w-[90px] h-[105px]" alt="Image" />
          <div className="px-3 lg:p-5">
            <div className="flex items-center pb-3">
              {getStars({ stars: stars || 0 })}
            </div>
            <h6 className="text-base mb-1">
              {productName}
            </h6>
            <span className="text-sm text-secondary">{discountedPrice}</span>
            <del className="text-xs mx-2 text-secondary">{originalPrice}</del>
          </div>
        </div>
      </a>
    </div>
  );
}
