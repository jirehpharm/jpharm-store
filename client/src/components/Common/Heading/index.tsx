export default function index({ heading = "Heading", subHeading = "Sub Heading" }) {
  return (
    <div className="flex justify-center flex-col items-center ">
      <h1 className="text-center">{heading}</h1>
      <p className="text-center w-[400px]">{subHeading}</p><br/>
    </div>
  )
}
