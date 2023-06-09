import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";

import SocialLinks from "./SocialLinks";

const socialData = [
  {
    url: "#",
    icon: GlobeAltIcon,
  },
  {
    url: "#",
    icon: FaFacebook,
  },
  {
    url: "#",
    icon: FaInstagram,
  },
  {
    url: "#",
    icon: AiOutlineTwitter,
  },
];

export default function ContactNav() {
  return (
    <div className="p-2 border-b border-gray-200">
      <div className="mx-auto max-w-6xl flex flex-row justify-between items-center ">
        <ul className="flex space-x-4 text-sm">
          <li className="font-bold">
            <a
              href="mailto:info@mail.com?Subject=Flower%20greetings%20to%20you"
              className="flex items-center text-light gap-1 hover:text-secondary"
            >
              <EnvelopeIcon className="h-4 w-4 inline text-secondary" />{" "}
              info@mail.com
            </a>
          </li>
          <li className="text-light font-bold">
            <a href="locations.html" className="flex items-center gap-1 text-light">
              <MapPinIcon className="h-4 w-4 inline text-secondary" /> 15/A,
              Nest Tower, NYC
            </a>
          </li>
        </ul>
        <SocialLinks socialData={socialData}/>
      </div>
    </div>
  );
}
