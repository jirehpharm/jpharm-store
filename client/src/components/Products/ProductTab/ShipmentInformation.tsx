export interface IShipmentProps {
  shipmentData: string;
}


const ShipmentInformation = (props: IShipmentProps) => {
  const { shipmentData } = props;
  return (
    <div className="max-w-5xl bg-white md:p-[5px] mx-auto" dangerouslySetInnerHTML={{ __html: shipmentData }} />
  )
}

export default ShipmentInformation;