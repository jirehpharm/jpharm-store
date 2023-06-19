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

  return (
    <section className="pt-28 pb-[70px] mx-auto md:max-w-xl lg:max-w-6xl">
      <div className="relative px-4">
        <div className="relative mb-12 text-center">
          <h6 className="font-semibold text-secondary text-xl">News & Blogs</h6>
          <h1 className="text-2xl">Leatest Feeds</h1>
          <Carousel slidesPerView={3} slides={content} />
        </div>
      </div>
      {/* blog items starts */}
    </section>
  );
}
