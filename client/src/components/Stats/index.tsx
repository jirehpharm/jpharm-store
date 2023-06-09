import React from "react";
const data = [
  {
    title: "Free shipping",
    description: "On all orders over $49.00",
    image: "img/icons/svg/8-trolley.svg",
  },
  {
    title: "15 days returns",
    description: "Moneyback guarantee",
    image: "img/icons/svg/9-money.svg",
  },
  {
    title: "Secure checkout",
    description: "Protected by Paypal",
    image: "img/icons/svg/10-credit-card.svg",
  },
  {
    title: "Offer & gift here",
    description: "On all orders over",
    image: "img/icons/svg/11-gift-card.svg",
  },
];
export default function Stats() {
  return (
    <div className="ltn__feature-area bg-sectionColor mt-24 py-7 lg:mt-16">
      <div className="max-w-6xl mx-auto">
        <div className=" grid grid-cols-4">
          {data.map((item: { title: string; description: string; image: string }, index: number) => (
            <div className="flex items-center mt-5">
              <div className="mb-5 mr-2 flex w-[20%]">
                <img src={item.image} alt="#" className="" />
              </div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
