export interface ITestimonialsProps {
  name: string;
  image: string;
  post: string;
  description: string;
}
export default function TestimonialsCard({ name, image, post, description }: ITestimonialsProps) {
  return (
    <div className="bg-white">
      <div className="shadow-xl  p-8 grid grid-cols-5">
        <div className="small-product-item-img col-span-2">
          <img src={image} className="w-40 h-40" alt="Image" />
        </div>
        <div className="col-span-3">
          <p className="text-light">{description}</p>
          <h4 className="mb-1">{name}</h4>
          <h6 className="text-secondary">{post}</h6>
        </div>
      </div>
    </div>
  );
}
