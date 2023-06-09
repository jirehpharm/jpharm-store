import ProductOverView from "../ProductOverView";

export default function BestSeller() {
  return (
    <section>
      <div className="max-w-6xl mx-auto">
        <h1>Best Selling Item</h1>
        <div className="grid grid-cols-4 ">
          <ProductOverView />
        </div>
      </div>
    </section>
  );
}
