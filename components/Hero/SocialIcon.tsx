import Link from "next/link";

interface SocialIconProps {
  icon: string;
  link: string;
}

const SocialIcon = ({ icon, link }: SocialIconProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      className="h-8 justify-center items-center aspect-square transition">
      <span
        className={`${icon} w-full h-full bg-gray-400 transition hover:bg-gray-200`}></span>
    </Link>
  );
};

export default SocialIcon;
