import ProductOverViewCard from "../Cards/ProductOverViewCard";
import Carousel from "../Carousel";
import { IProductProps } from "./types";

const data = [
  {
    isNew: true,
    image: "img/product/5.png",
    quickView: "#",
    addToCard: "#",
    wishlist: "#",
    stars: 5,
    productName: "Antiseptic Spray",
    price: "$32.00",
    originalPrice: "$46.00",
  },
  {
    isNew: true,
    image: "img/product/5.png",
    quickView: "#",
    addToCard: "#",
    wishlist: "#",
    stars: 3,
    productName: "Antiseptic Spray",
    price: "$32.00",
    originalPrice: "$46.00",
  },
  {
    isNew: false,
    image: "img/product/5.png",
    quickView: "#",
    addToCard: "#",
    wishlist: "#",
    stars: 4,
    productName: "Antiseptic Spray",
    price: "$32.00",
    originalPrice: "$46.00",
  },
  {
    isNew: true,
    image: "img/product/5.png",
    quickView: "#",
    addToCard: "#",
    wishlist: "#",
    stars: 2,
    productName: "Antiseptic Spray",
    price: "$32.00",
    originalPrice: "$46.00",
  },
  {
    isNew: false,
    image: "img/product/5.png",
    quickView: "#",
    addToCard: "#",
    wishlist: "#",
    stars: 3,
    productName: "Antiseptic Spray",
    price: "$32.00",
    originalPrice: "$46.00",
  },
];
const content = data.map((item: IProductProps, index: number) => <ProductOverViewCard isTextCenter={false} {...item} showStars={true} key={index} />);

export default function TrendingProduct() {
  return (
    <section>
      <div className="max-w-6xl mx-auto py-14">
        <h1 className="text-center mb-11 text-5xl">Trending Products</h1>
        <Carousel slidesPerView={4} spaceBetween={25} slides={content} />
      </div>
    </section>
  );
}
