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
      className="h-[75%] justify-center items-center aspect-square">
      <span className={`${icon} w-full h-full bg-gray-400`}></span>
    </Link>
  );
};

export default SocialIcon;
