import { MapPinIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <div>
      <footer className="ltn__footer-area bg-primary text-white pt-12">
        <div className="flex flex-col items-center text-light">
          <p className="text-light">About US Term of Service Privacy Policy User Guide</p>
          <a href="/" className="cursor-pointer my-5">
            <img src="full_logo.png" alt="logo" className="w-[250px]" />
          </a>
          <div className="flex space-x-3 divide-x divide-light mt-6">
            <p className="text-light ">Company Name: Iremal Co., Ltd</p>
            <p className="text-light pl-3">Representative: Donghyun Lee</p>
            <p className="text-light pl-3">Mail Order Number: No. 2019-Anyang Dong-an-0812</p>
            <p className="text-light pl-3">Business Registration number: 138-81-52608</p>
          </div>
          <div className="flex space-x-3 divide-x divide-light">
            <p className="text-light ">Contact: 031-427-3851</p>
            <p className="text-light pl-3">Fax: 031-427-1404</p>
            <p className="text-light pl-3">Email: jirehpharm09@naver.com</p>
          </div>
          <p className="text-light">Personal Information Manager: Donghyun Lee {"("}dreamch83@naver.com{")"}</p>
          <p className="text-light mt-10 "><MapPinIcon className="text-light h-6 w-6 inline mr-3" />14109 Irefarm, 4th floor, 604 Gyeongsu-daero, Dongan-gu, Anyang-si, Gyeonggi-do {"("}Hogye- dong{")"}</p>
          <p className="text-light ">Copyright © 2014 Irefarm Co., Ltd. All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}
