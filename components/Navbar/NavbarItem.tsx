import Link from "next/link";

interface NavbarItemProps {
  href: string;
  children: React.ReactNode;
  activeSection?: string;
}

const NavbarItem = ({ href, children, activeSection }: NavbarItemProps) => {
  const isActive = activeSection === href;

  const onClick = () => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <li
      className={`font-pixelify text-lg transition max-lg:text-2xl ${isActive ? "text-rose-500" : "text-white"}`}
      onClick={onClick}>
      <Link href={href} className="block w-full">
        {`<${children} />`}
      </Link>
    </li>
  );
};

export default NavbarItem;
