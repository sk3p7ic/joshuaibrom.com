import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

type SocialListing = {
  title: string;
  href: string;
  iconElem: JSX.Element;
};

const iconSize = 24;

const socialList: SocialListing[] = [
  {
    title: "@sk3p7ic",
    href: "https://github.com/sk3p7ic/",
    iconElem: <FaGithub size={iconSize} />,
  },
  {
    title: "@real_sk3p7ic",
    href: "https://twitter.com/real_sk3p7ic",
    iconElem: <FaTwitter size={iconSize} />,
  },
  {
    title: "@Joshua-Ibrom",
    href: "https://www.linkedin.com/in/joshua-ibrom",
    iconElem: <FaLinkedin size={iconSize} />,
  },
];

export const Socials = () => {
  return (
    <div className="flex flex-col gap-4 pb-12">
      <h3
        id="socials"
        className="font-raleway text-4xl text-emerald-700 dark:text-cyan-500 transition-colors duration-1000"
      >
        socials.
      </h3>
      <div className="flex flex-col md:flex-row flex-wrap gap-8">
        {socialList.map((listing, i) => (
          <Link
            href={listing.href}
            target="_blank"
            referrerPolicy="no-referrer"
            className="flex flex-row gap-2 items-center text-emerald-500 dark:text-fuchsia-500 text-lg"
          >
            {listing.iconElem}
            <span>{listing.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};
