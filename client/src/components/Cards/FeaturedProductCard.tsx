import getStars from "../getStars";

export default function FeaturedProductCard({ productName = "Antiseptic Spray", discountedPrise = "$129.00", originalPrise = "$140.00", image = "/placeholder/600x701.png", stars = 0 }) {
  return (
    <section className=" bg-white">
      <div className="border border-gray-300 h-[190px] p-8 flex">
        <div className="small-product-item-img">
          <a href="#"><img src={image} className="w-[111px] h-[131px]" alt="Image" /></a>
        </div>
        <div className="p-5">
          <div className="flex items-center pb-3">
            {getStars({ stars })}
          </div>
          <h5 className="text-base"><a className=" text-[#071c1f]" href="#">{productName}</a></h5>
          <span className="text-sm text-[#0a9a73]">{discountedPrise}</span>
          <del className="text-xs mx-2 text-[#0a9a73]">{originalPrise}</del>
        </div>
      </div>
    </section>
  )
}
