import Link from "next/link";

interface NavbarItemProps {
  id: number;
  href: string;
  children: React.ReactNode;
  closeMenu: () => void;
  activeSection?: string;
}

const NavbarItem = ({
  id,
  href,
  children,
  closeMenu,
  activeSection,
}: NavbarItemProps) => {
  const isActive = activeSection === href;

  const onClick = () => {
    closeMenu();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <li
      className={`bg-slate-950 border-3 border-slate-900 hover:text-zinc-50 transition shadow-xl ${
        isActive ? "text-zinc-50" : "text-gray-500"
      } intersect-once intersect:motion-preset-focus intersect:motion-delay-[${id ? id * 500 : 0}ms]`}
      onClick={onClick}>
      <Link href={href} className="block w-full py-1 px-3 max-lg:p-5">
        {`<${children} />`}
      </Link>
    </li>
  );
};

export default NavbarItem;
