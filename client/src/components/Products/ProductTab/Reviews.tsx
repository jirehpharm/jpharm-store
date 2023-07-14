import getStars from "../../getStars";
import { IReviewsProp } from "./types";
import Textarea from "../../Form/Textarea";
import Button from "../../Common/Button";

interface IReviews {
  reviewData: IReviewsProp;
}

export default function Reviews(props: IReviews) {
  const { reviewData } = props;
  return (
    <div>
      <h4 className="text-center text-base font-normal">Review 2</h4>
      <form>
        <table className="mr-0 md:w-[500px]">
          <tr>
            <td className="w-[70px] text-base font-normal">
              Rating
            </td>
            <td>
              <div className="w-[20px] font-bold">
                :
              </div>
            </td>
            <td>
              <div className="flex items-center">
                <div className="flex items-center my-2">
                  <div className="lg:flex lg:space-x-5 items-center">
                    <div className="flex items-center">
                      <input type="radio" id="star_5" name="star_5" />{getStars({ stars: 5 })}{" "}
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="star_5" name="star_5" />{getStars({ stars: 4 })}{" "}
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="star_5" name="star_5" />{getStars({ stars: 3 })}{" "}
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="star_5" name="star_5" />{getStars({ stars: 2 })}{" "}
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="star_5" name="star_5" />{getStars({ stars: 1 })}{" "}
                    </div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td className="text-base font-normal">
              Comment
            </td>
            <td className="font-bold mx-0">
              :
            </td>
            <td className="">
              <div className="">
                <Textarea placeholder={"Write more then 10 letters"} name={""} />
              </div>
            </td>
          </tr>
          <tr>
            <td className="text-base font-normal">
              Image
            </td>
            <td className="font-bold">
              :
            </td>
            <td>
              <input type="file" placeholder={""} className="w-[90%] md:w-full" />
            </td>
          </tr>
        </table>
        <div className="flex justify-end">
          <Button type="submit" className="my-5 text-base font-normal">
            Write Review
          </Button>
        </div>
      </form>


      <div className="border m-2"></div>
      {reviewData?.comments?.map((review, index) => (
        <div
          key={index}
          className="md:grid grid-cols-6 py-8 items-center border-b border-gray-200"
        >

          <div className="col-span-1 flex ">
            <img
              src={review.image}
              alt="image"
              className="rounded-[50%] h-24 w-24"
            />
          </div>
          <div className="col-span-5">
            <div className="sm:flex justify-between items-center pb-2">
              <p className="mb-0 font-medium font-josefin text-lg">
                {review.name}
              </p>
              <div className="rounded-full px-5 py-1  border border-gray-200 hover:border-secondary sm:flex items-center text-medium">
                {review.date}
              </div>
            </div>
            <div className="flex items-center">
              {getStars({ stars: review.stars })}{" "}
            </div>
            <p className="mb-0 text-sm text-light my-2">{review.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

