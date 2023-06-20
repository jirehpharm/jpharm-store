import { FaUser, FaTag, FaCalendarAlt } from "react-icons/fa";
import { ITrendingBlogProps } from "../../Blog/types";

export default function BlogCard({
  blogLink,
  src,
  alt,
  adminLink,
  adminName,
  tagLink,
  tagName,
  blogTitle,
  date,
}: ITrendingBlogProps) {
  return (
    <div className=" mx-auto md:max-w-xl lg:max-w-6xl relative px-4">
      <div className=" relative mb-7 mx-auto bg-white shadow-lg">
        <div className="relative b-radius-b-35px">
          <div>
            <a href={blogLink}>
              <img src={src} className="relative w-full h-full" alt={alt} />
            </a>
            <div className="lg:p-8 md:p-7 p-4">
              <div className="lg:mb-5 mb-1">
                <ul className="lg:flex text-center sm:text-xs">
                  <li className="flex sm:text-xs">
                    <FaUser className="text-secondary my-auto lg:text-base text-xs" />
                    <a
                      className="flex mr-3 lg:p-2 pl-2 text-light text-xs lg:text-base"
                      href={adminLink}
                    >
                      {adminName}
                    </a>
                  </li>
                  <li className="flex">
                    <FaTag className="text-secondary my-auto lg:text-base text-xs" />
                    <a
                      className="flex flex-wrap lg:p-2 pl-2 relative text-light text-xs lg:text-lg"
                      href={tagLink}
                    >
                      {tagName}
                    </a>
                  </li>
                </ul>
              </div>
              <h3 className="mb-5 font-semibold ">
                <a href={blogLink} className="text-black text-sm lg:text-xl">
                  {blogTitle}
                </a>
              </h3>
              <hr />
              <div className="flex items-center pt-3">
                <div className="flex items-center">
                  <FaCalendarAlt className="text-secondary text-xs lg:text-base" />
                  <ul className="flex">
                    <li className="flex sm:pr-8 md:pr-4 p-2 left-0 text-light font-semibold relative lg:text-sm text-xs mt-0">
                      {date}
                    </li>
                  </ul>
                </div>
                <div>
                  <a
                    href={blogLink}
                    className="my-auto flex md:max-w-2xl font-semibold lg:font-bold font-ibm  text-xs lg:text-lg"
                  >
                    READ MORE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
