import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function CTA() {
  return (
    <div className="-mb-24 mt-5">
      <div className="mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-5xl">
        <div className=" flex flex-col lg:flex-row justify-between items-center p-8 m-4 bg-secondary relative text-center">
          <div className=" text-white">
            <h1 className="text-white text-2xl text-left pb-5 md:text-[26px] lg:text-3xl lg:pl-10 flex flex-col lg:justify-center  ">
              Buy medical disposable face mask <br /> to protect your loved ones
            </h1>
          </div>
          <div className="mt-0">
            <a className=" py-3 px-5 bg-white text-primary lg:py-4 lg:px-10 lg:mr-10 hover:text-white hover:bg-primary" href="/products">
              Explore Products{" "} <ArrowRightIcon className="w-6 h-6 inline" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
