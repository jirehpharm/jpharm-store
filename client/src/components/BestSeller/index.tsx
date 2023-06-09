import ProductOverView from "../ProductOverView";
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
interface ProductProps {
  isNew: boolean;
  image: string;
  quickView: string;
  addToCard: string;
  wishlist: string;
  stars: number;
  productName: string;
  price: string;
  originalPrice: string;
}
export default function BestSeller() {
  return (
    <section>
      <div className="max-w-6xl mx-auto py-14">
        <h1 className="text-center mb-11 text-5xl">Best Selling Item</h1>
        <div className="grid grid-cols-4 gap-5 ">
          {data.map((item: ProductProps, index: number) => (
            <ProductOverView
              isNew={item.isNew}
              image={item.image}
              quickView={item.quickView}
              addToCard={item.addToCard}
              wishlist={item.wishlist}
              stars={item.stars}
              productName={item.productName}
              price={item.price}
              originalPrice={item.originalPrice}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
