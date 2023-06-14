import ReviewForm from "../../ReviewForm";
import getStars from "../../getStars";
import { IReviewsProp } from "./types";

interface IReviews {
  reviewData: IReviewsProp;
}

export default function Reviews(props: IReviews) {
  const { reviewData } = props;
  return (
    <div>
      <div className="flex items-center">
        {getStars({ stars: 4 })}{" "}
        <p className="mb-0 text-sm text-yellow-400 ml-2">
          &#40;{reviewData?.totalReviews} reviews&#41;
        </p>
      </div>
      {reviewData?.comments?.map((review, index) => (
        <div
          key={index}
          className="grid grid-cols-6 py-8 items-center border-b border-gray-200"
        >
          <div className="col-span-1 flex ">
            <img
              src={review.image}
              alt="image"
              className="rounded-[50%] h-24 w-24"
            />
          </div>
          <div className="col-span-5">
            <div className="flex justify-between">
              <p className="mb-0 font-medium">{review.name}</p>
              <div className="rounded-full px-5 py-1  border border-gray-200 hover:border-secondary flex items-center text-medium">
                {review.date}
              </div>
            </div>
            <div className="flex items-center">
              {getStars({ stars: review.stars })}{" "}
            </div>
            <p className="mb-0 text-sm text-light my-3">{review.description}</p>
          </div>
        </div>
      ))}
      <ReviewForm />
    </div>
  );
}
