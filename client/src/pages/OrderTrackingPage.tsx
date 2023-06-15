import { orderTracking } from "../components/OrderTracking/constant";
import OrderTrackingPage from "../components/OrderTracking/OrderTracking";

export default function OrderTracking() {
  return (
    <div>
      <OrderTrackingPage order={orderTracking} />
    </div>
  );
}
