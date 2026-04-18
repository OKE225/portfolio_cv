import Link from "next/link";

interface NavbarItemProps {
  href: string;
  children: React.ReactNode;
  closeMenu: () => void;
}

const NavbarItem = ({ href, closeMenu, children }: NavbarItemProps) => {
  return (
    <li className="bg-slate-950 border-3 border-slate-900 text-gray-500 hover:text-zinc-50 ">
      <Link href={href} className="block w-full py-1 px-3" onClick={closeMenu}>
        {children}
      </Link>
    </li>
  );
};

export default NavbarItem;
