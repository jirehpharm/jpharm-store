import BreadcrumbBanner from "../BreadcrumbBanner";
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
          <a href="/edit-schoolUser">
            <div className="text-[#fff] text-sm lg:text-[13px] font-bold font-ibm p-2 my-auto bg-[#46CEB6] rounded-[5px] ml-1">
              Edit User Info
            </div>
          </a>
          <a href="#">
            <div className="text-[#fff] text-sm lg:text-[13px] font-bold font-ibm p-2 my-auto bg-[#FF9494] rounded-[5px] ml-1">
              Withdrawl
            </div>
          </a>
        </div>

        <div className="mx-auto md:grid md:grid-cols-2 border-[5px] border-solid border-[#C2C1C1] mt-5">
          <div className="flex justify-center border-b border--[#D6D6D6]">
            <h5 className="text-base lg:text-lg text-center mx-auto my-auto text-[#000]">
              Name
            </h5>
            <div className="w-[52%] my-auto text-[#000]">ljvorg9hep</div>
          </div>

          <div className="flex justify-center border-b border--[#D6D6D6]">
            <h5 className="text-base lg:text-lg text-center mx-auto my-4 text-[#000]">
              School / Company
            </h5>
            <div className="w-[52%] my-auto text-[#000]">sciohwe</div>
          </div>

          <div className="flex justify-center border-b border--[#D6D6D6]">
            <h5 className="text-base lg:text-lg text-center mx-auto my-4 text-[#000]">
              email
            </h5>
            <div className="w-[52%] my-auto text-[#000]">sadcavuv</div>
          </div>
          <div className="flex justify-center border-b border--[#D6D6D6]">
            <h5 className="text-base lg:text-lg text-center mx-auto my-4 text-[#000]">
              Phone Number
            </h5>
            <div className="w-[52%] my-auto text-[#000]">,msdcno</div>
          </div>

          <div className="flex justify-center">
            <h5 className="text-base lg:text-lg text-center pl-3 my-4 mx-auto text-[#000]">
              Date of Register
            </h5>
            <div className="w-[52%] my-auto text-[#000]">sdmvapiva</div>
          </div>

          <div className="flex justify-center">
            <h5 className="text-base lg:text-lg text-center mx-auto my-4 text-[#000]">
              Address
            </h5>
            <div className="w-[52%] my-auto text-[#000]">sdafjer0v</div>
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
