import BlogCard from "../Cards/BlogCard/BlogCard";
import Carousel from "../Carousel";
import { ITrendingBlogProps } from "./types";

interface ITrendingBlog {
  blogDetails: ITrendingBlogProps[];
}

export default function TrendingBlog(props: ITrendingBlog) {
  const { blogDetails } = props;

  const content = blogDetails.map((item: ITrendingBlogProps, index: number) => (
    <BlogCard {...item} key={index} />
  ));

  return (
    <section className="pt-28 pb-[70px] mx-auto max-w-6xl">
      <div className="relative px-4">
        <div className="relative mb-12 text-center">
          <h6 className="font-semibold text-secondary">News & Blogs</h6>
          <h1>Leatest News Feeds</h1>
          <Carousel slidesPerView={3} slides={content} />
        </div>
      </div>
      {/* blog items starts */}
    </section>
  );
}
