import FeaturedProductCard from "./FeaturedProductCard";

const attributes = [
  {
    productName: "Digital Stethoscope",
    discountedPrise: "$145.00 ",
    originalPrise: "$165.00 ",
    image: "",
    stars: 2
  },
  {
    productName: "Thermometer Gun",
    discountedPrise: "$105.00 ",
    originalPrise: "$145.00 ",
    image: "",
    stars: 4
  },
  {
    productName: "Coil Spring Kit",
    discountedPrise: "$115.00 ",
    originalPrise: "$155.00 ",
    image: "",
    stars: 1
  },
  {
    productName: "Cosmetic Containers",
    discountedPrise: "$15.00 ",
    originalPrise: "$30.00 ",
    image: "",
    stars: 3
  },
  {
    productName: "Digital Stethoscope",
    discountedPrise: "$145.00 ",
    originalPrise: "$165.00 ",
    image: "",
    stars: 2
  },
  {
    productName: "Thermometer Gun",
    discountedPrise: "$105.00 ",
    originalPrise: "$145.00 ",
    image: "",
    stars: 4
  },
  {
    productName: "Coil Spring Kit",
    discountedPrise: "$115.00 ",
    originalPrise: "$155.00 ",
    image: "",
    stars: 1
  },
  {
    productName: "Cosmetic Containers",
    discountedPrise: "$15.00 ",
    originalPrise: "$30.00 ",
    image: "",
    stars: 3
  },

]

interface ProductDataProps {
  productName: string,
  discountedPrise: string,
  originalPrise: string,
  image: string,
  stars: number
}
export default function FeaturedProduct() {
  return (
    <section className=" bg-[#F2F6F7] py-20"> 
      <h1 className="text-center">Featured Products</h1>
      <div className="max-w-7xl mx-auto my-14">
        <div className="grid grid-cols-3 gap-10 ">
          {/* FeaturedProductCard has productName, discountedPrise and originalPrise props */}
          <FeaturedProductCard />
          {attributes.map((data: ProductDataProps, index: number) => (
            <FeaturedProductCard productName={data.productName} stars={data.stars} discountedPrise={data.discountedPrise} originalPrise={data.originalPrise} key={index} />
          ))}
        </div>
      </div>
    </section>

  )
}
