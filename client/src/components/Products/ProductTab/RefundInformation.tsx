export interface IRefundProps {
  refundData: string;
}

const RefundInformation = (props: IRefundProps) => {
  const { refundData } = props;
  return (
    <div className="max-w-5xl bg-white p-3 md:p-[5px] mx-auto text-2xl" dangerouslySetInnerHTML={{ __html: refundData }} />
  )
}

export default RefundInformation;