import { useEffect, useLayoutEffect, useState } from "react";
import BlogCard from "../Cards/BlogCard/BlogCard";
import Carousel from "../Carousel";
import { ITrendingBlogProps } from "./types";

export default function TrendingBlog({
  blogDetails,
}: {
  blogDetails: ITrendingBlogProps[];
}) {
  const content = blogDetails.map((item: ITrendingBlogProps, index: number) => (
    <BlogCard {...item} key={index} />
  ));

  const [screensize, setScreensize] = useState(window.innerWidth);
  const [cardNo, setCardNo] = useState<any>(7);

  useLayoutEffect(() => {
    window.addEventListener("resize", () => {
      setScreensize(window.innerWidth);
    });
  }, []);

  const pagination = {
    clickable: true,
  };

  useEffect(() => {
    if (screensize < 640) {
      setCardNo(1);
    } else if (screensize >= 640 && screensize < 770) {
      setCardNo(2);
    } else if (screensize >= 770 && screensize < 1024) {
      setCardNo(2);
    } else if (screensize >= 1024 && screensize < 1280) {
      setCardNo(3);
    } else if (screensize > 1280) {
      setCardNo(3);
    }
  }, [screensize]);

  return (
    <section className="pt-14  lg:pt-28 lg:pb-[70px] mx-auto md:max-w-xl lg:max-w-6xl">
      <div className="relative px-4">
        <div className="relative mb-12 text-center">
          <h6 className="font-semibold text-secondary text-lg lg:text-xl">
            News & Blogs
          </h6>
          <h1 className="text-2xl lg:text-4xl">Leatest Feeds</h1>
          <Carousel
            slidesPerView={cardNo}
            slides={content}
            pagination={pagination}
          />
        </div>
      </div>
      {/* blog items starts */}
    </section>
  );
}
