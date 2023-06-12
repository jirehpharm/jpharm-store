import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";

import SocialLinks from "./SocialLinks";

const email = "info@mail.com";
const emailSubject = "Flower greetings to you";
const location = "15/A, Nest Tower, NYC";

export default function ContactNav() {
  return (
    <div className="p-2 border-b border-gray-200">
      <div className="mx-auto max-w-6xl flex flex-row justify-between items-center ">
        <ul className="flex space-x-4 text-sm">
          <li className="font-bold">
            <a
              href={`mailto:${email}?subject=${emailSubject}`}
              className="flex items-center text-light gap-1 hover:text-secondary"
            >
              <EnvelopeIcon className="h-4 w-4 inline text-secondary" />
              {email}
            </a>
          </li>
          <li className="text-light font-bold">
            <a
              href="locations.html"
              className="flex items-center gap-1 text-light"
            >
              <MapPinIcon className="h-4 w-4 inline text-secondary" />
              {location}
            </a>
          </li>
        </ul>
        <SocialLinks />
      </div>
    </div>
  );
}
