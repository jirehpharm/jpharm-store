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
    <section>
      <div className="grid grid-row-3 grid-flow-col mx-auto max-w-6xl relative px-4">
        <div className=" relative mb-7  mx-auto bg-white shadow-lg">
          <div className="relative b-radius-b-35px">
            <>
              <a href={blogLink}>
                <img
                  src={src}
                  className="relative w-full h-full hover:scale-125 ease-out"
                  alt={alt}
                />
              </a>
              <div className="p-8 ">
                <div className="mb-5">
                  <ul className="flex text-center m-block-start-1em m-block-end-1em m-inline-start-0px m-inline-end-0px p-inline-start-40px">
                    <li className="flex ">
                      <FaUser className="text-secondary my-auto" />
                      <a
                        className="flex mr-3 p-2  relative text-light"
                        href={adminLink}
                      >
                        {adminName}
                      </a>
                    </li>
                    <li className="flex">
                      <FaTag className="text-secondary my-auto" />
                      <a
                        className="flex flex-wrap p-2 relative text-light"
                        href={tagLink}
                      >
                        {tagName}
                      </a>
                    </li>
                  </ul>
                </div>
                <h3 className="mb-5 text-xl text-justify font-semibold">
                  <a href={blogLink} className="text-black">
                    {blogTitle}
                    <br />
                    <br />
                    <hr />
                  </a>
                </h3>
                <div className="mb-0 flex justify-between d-webkit-box d-ms-flex ">
                  <div className="flex items-center my-auto">
                    <FaCalendarAlt className="text-secondary my-auto" />
                    <ul className="p-auto my-auto">
                      <li className="flex flex-wrap p-2 my-auto text-light font-semibold relative text-sm mt-0">
                        {date}
                      </li>
                    </ul>
                  </div>
                  <div className="flex">
                    <a href={blogLink} className="my-auto font-bold">
                      READ MORE
                    </a>
                  </div>
                </div>
              </div>
            </>
          </div>
        </div>
      </div>
    </section>
  );
}
