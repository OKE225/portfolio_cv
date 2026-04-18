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
      className="h-full flex justify-center items-center
       aspect-square shadow-[inset_0_0_0_3px] shadow-rose-500">
      <span className={`${icon} w-[80%] h-[80%] bg-rose-500`}></span>
    </Link>
  );
};

export default SocialIcon;
