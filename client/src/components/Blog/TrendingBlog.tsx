import BlogCard from "../Cards/BlogCard/BlogCard";
import Carousel from "../Carousel";
import { ITrendingBlogProps } from "./type";

export default function TrendingBlog() {
  const blogDetails = [
    {
      bloglink: "#",
      src: "img/blog/1.jpg",
      alt: "Blog Image",
      adminLink: "#",
      adminName: "by: Admin",
      taglink: "#",
      tagName: "corporate",
      blogTitle: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
      date: "june 12, 2023",
    },
    {
      bloglink: "#",
      src: "img/blog/1.jpg",
      alt: "Blog Image",
      adminLink: "#",
      adminName: "by: Admin",
      taglink: "#",
      tagName: "Corporate",
      blogTitle: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
      date: "june 12, 2023",
    },
    {
      bloglink: "",
      src: "img/blog/1.jpg",
      alt: "Blog Image",
      adminLink: "#",
      adminName: "by: Admin",
      taglink: "#",
      tagName: "Corporate",
      blogTitle: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
      date: "june 12, 2023",
    },
    {
      bloglink: "#",
      src: "img/blog/1.jpg",
      alt: "Blog Image",
      adminLink: "#",
      adminName: "by: Admin",
      taglink: "#",
      tagName: "Corporate",
      blogTitle: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
      date: "june 12, 2023",
    },
  ];
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
          {/* {BlogDetails.map((item: ITrendingBlogProps, index: number) => (
            <BlogCard {...item} key={index} />
          ))} */}
        </div>
      </div>
      {/* blog items starts */}
    </section>
  );
}
