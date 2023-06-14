import Button from "./Common/Button";
import getStars from "./getStars";

export default function ReviewForm() {
  const fields = [
    { name: "Type your name...", type: "text" },
    { name: "Type your email...", type: "email" },
    { name: "Type your website...", type: "text" },
  ];
  return (
    <section className="mt-10">
      <form action="#" className="bg-[rgb(240,244,247)] grid grid-rows-7">
        <h3 className=" pl-4 mx-7 mt-6 mb-4 border-l-2 border-secondary">Add a Review</h3>
        <p className=" py-3 mx-7 mt-2 mb-0 flex flex-wrap">Your Ratings: {getStars({ stars: 4 })}</p>
        <div data-te-input-wrapper-init>
          <textarea
            className=" border-borderColor focus-visible:outline-0 bg-white p-5 mx-7 mt-8 w-[665px]"
            placeholder="Type your comment..."></textarea>
        </div>
        {fields.map((field, index) => (
          <input
            key={index}
            className=" border-borderColor focus-visible:outline-0 bg-white p-5 mx-7 mt-8"
            type={field.type}
            name={field.name}
            placeholder={field.name}
          />
        ))}
        <div className="flex items-center py-3 mx-7 mt-5 mb-0">
          <input id="default-checkbox" type="checkbox" className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-white focus:ring-2 dark:bg-white dark:border-white" />
          <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-500"> Save my name, email, and website in this browser for the next time I comment.</label>
        </div>
        <Button type="submit" className="my-5 mx-7 w-[150px]">SUBMIT</Button>
      </form>
      <div className="pb-16"></div>
    </section>
  )
}
