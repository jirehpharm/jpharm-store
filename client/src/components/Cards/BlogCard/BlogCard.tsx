import { FaUser, FaTag, FaCalendarAlt } from "react-icons/fa";
import { ITrendingBlogProps } from "../../Blog/type";
export default function BlogCard({
  bloglink,
  src,
  alt,
  adminLink,
  adminName,
  taglink,
  tagName,
  blogTitle,
  date,
}: ITrendingBlogProps) {
  return (
    <section>
      <div className="grid grid-row-3 grid-flow-col mx-auto max-w-6xl relative px-4">
        <div className=" relative mb-7  mx-auto bg-white shadow">
          <div className="relative b-radius-b-35px">
            <>
              <a href={bloglink}>
                <img
                  src={src}
                  className="relative w-full h-full hover:scale-130"
                  alt={alt}
                />
              </a>
              <div className="py-7 px-5 ">
                <div className="mb-5">
                  <ul className="flex justify-between m-block-start-1em m-block-end-1em m-inline-start-0px m-inline-end-0px p-inline-start-40px">
                    <li className="flex">
                      <a
                        className="flex justify-between mr-3 relative"
                        href={adminLink}
                      >
                        <FaUser />
                        {adminName}
                      </a>
                    </li>
                    <li className="">
                      <a
                        className="flex flex-wrap mr-2 relative"
                        href={taglink}
                      >
                        <FaTag />
                        {tagName}
                      </a>
                    </li>
                  </ul>
                </div>
                <h3 className="mb-5 text-xl text-justify font-semibold">
                  <a href={bloglink} className="text-black">
                    {blogTitle}
                    <hr />
                  </a>
                </h3>
                <div className="mb-0 flex justify-between d-webkit-box d-ms-flex ">
                  <div className="mb-5">
                    <ul className=" p-0 m-0">
                      <span className="inline-flex">
                        <li className="flex flex-wrap font-semibold relative text-sm mt-0">
                          <FaCalendarAlt className="text-secondary" />
                          {date}
                        </li>
                      </span>
                    </ul>
                  </div>
                  <div className="flex">
                    <a href={bloglink}>Read More</a>
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
