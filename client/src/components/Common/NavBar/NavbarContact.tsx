import { PhoneIcon } from "@heroicons/react/24/outline";

export default function NavbarContact() {
  return (
    <div className="p-2 px-4 bg-[#F2F5F7] border-b border-gray-200">
      <div className="space-y-3 sm:space-y-0 max-w-md md:max-w-2xl lg:max-w-5xl xl:max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center ">
        <p className="font-normal mb-0 text-sm md:text-lg">모든 상품 <span className="text-secondary">무료배송</span></p>
        <div className="flex space-x-3 mt-0 items-center">
          <a
            href="tel:+1234567890"
            className="flex items-center text-sm md:text-base font-normal text-black hover:text-black focus:text-black"
          >
            <PhoneIcon className="h-4 w-4 text-secondary" />
            031-427-3851
          </a>
          <a href="/login" className="text-black">
            Login
          </a>
          <a href="/register" className="text-black">
            Register
          </a>
          <a href="#" className="text-black">
            FAQ
          </a>
        </div>
      </div>
    </div >
  );
}
