import ProductOverViewCard from "../Cards/ProductOverViewCard";
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

export default function BestSeller() {
  return (
    <section>
      <div className="max-w-6xl mx-auto py-14">
        <h1 className="text-center mb-11 text-5xl">Best Selling Item</h1>
        <div className="grid grid-cols-4 gap-5 ">
          {data.map((item: IProductProps, index: number) => (
            <ProductOverViewCard isTextCenter={false} {...item} showStars={true} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
