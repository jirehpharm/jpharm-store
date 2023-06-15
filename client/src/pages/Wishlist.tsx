import BreadcrumbBanner from "../components/Common/BreadcrumbBanner";
import WishList from "../components/WishList";
import { wishlistData } from "../components/WishList/constants";


export default function Wishlist() {
  return (
    <div>
      <BreadcrumbBanner title={"Wishlist"} />
      <div className="my-24">
        <WishList data={wishlistData} />
      </div>
    </div>
  )
}
