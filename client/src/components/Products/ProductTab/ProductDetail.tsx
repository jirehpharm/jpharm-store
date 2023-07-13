export interface IProductDetails {
  productData: string
}


const ProductDetail = (props: IProductDetails) => {
  const { productData } = props;
  return (
    <div className="max-w-5xl bg-white md:p-[3px] mx-auto" dangerouslySetInnerHTML={{ __html: productData }} >
    </div>
  )
}

export default ProductDetail;