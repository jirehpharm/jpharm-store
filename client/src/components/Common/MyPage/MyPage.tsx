import BreadcrumbBanner from "../BreadcrumbBanner";
import Button from "../Button/index";
import RecentOrdersTable from "./RecentOrdersTable";
import RecentViewProducts from "./RecentViewProducts";
import WhishListProducts from "./WhishListProducts";
import { recentOrders, recentViewProducts, whishlist } from "./content";

export default function MyPage() {
  return (
    <div>
      <BreadcrumbBanner title="Mypage" />
      <div className="my-24 max-w-md mx-auto md:max-w-2xl lg:max-w-5xl xl:max-w-6xl">
        <div className="flex justify-end">
          <a href="#" className="btn mr-2">
            Edit User Info
          </a>
          <Button className="mr-2" variant="danger">
            Withdrawal
          </Button>
        </div>

        <div className="mx-auto md:grid md:grid-cols-2 border-4 border-slate-500 mt-16">
          <div className="flex justify-center border-b border-slate-400">
            <h5 className="text-base lg:text-lg text-center mx-auto my-auto text-primary">
              Name
            </h5>
            <div className="w-[52%] my-auto text-light">ljvorg9hep</div>
          </div>

          <div className="flex justify-center border-b border-slate-400">
            <h5 className="text-base lg:text-lg text-center mx-auto my-4 text-primary">
              School / Company
            </h5>
            <div className="w-[52%] my-auto text-light">sciohwe</div>
          </div>

          <div className="flex justify-center border-b border-slate-400">
            <h5 className="text-base lg:text-lg text-center mx-auto my-4 text-primary">
              email
            </h5>
            <div className="w-[52%] my-auto text-light">sadcavuv</div>
          </div>
          <div className="flex justify-center border-b border-slate-400">
            <h5 className="text-base lg:text-lg text-center mx-auto my-4 text-primary">
              Phone Number
            </h5>
            <div className="w-[52%] my-auto text-light">,msdcno</div>
          </div>

          <div className="flex justify-center">
            <h5 className="text-base lg:text-lg text-center pl-3 my-4 mx-auto text-primary">
              Date of Register
            </h5>
            <div className="w-[52%] my-auto text-light">sdmvapiva</div>
          </div>

          <div className="flex justify-center">
            <h5 className="text-base lg:text-lg text-center mx-auto my-4 text-primary">
              Address
            </h5>
            <div className="w-[52%] my-auto text-light">sdafjer0v</div>
          </div>
        </div>
        {/* Recent Order List */}
        <RecentOrdersTable IRecentOrders={recentOrders} />
        <WhishListProducts whishlist={whishlist} />
        <RecentViewProducts IRecentlyViewed={recentViewProducts} />
      </div>
    </div>
  );
}
