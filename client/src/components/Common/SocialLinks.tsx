import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";

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

export default function SocialLinks() {
  return (
    <div className="flex gap-3 text-light">
      {socialData?.map((socialLink: any, idx: number) => (
        <a href={socialLink.url} key={idx}>
          <socialLink.icon
            className={`h-4 w-4 inline text-light hover:text-secondary`}
          />
        </a>
      ))}
    </div>
  );
}
