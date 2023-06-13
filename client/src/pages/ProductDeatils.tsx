import BreadcrumbBanner from "../components/Common/BreadcrumbBanner";
import Details from "../components/Products/Details";

export default function ProductDeatils() {
  return (
    <>
      <BreadcrumbBanner title={"Antiseptic Spray"} />
      <div className="grid grid-cols-6 gap-5 mx-auto max-w-6xl my-20">
        <div className="col-span-4">
          <Details />
        </div>
        <div className="col-span-2">sidebar</div>
      </div>
    </>
  );
}
