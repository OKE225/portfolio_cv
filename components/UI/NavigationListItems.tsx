import NavbarItem from "../Navbar/NavbarItem";

interface Props {
  activeSection: string;
  onNavigate?: () => void;
}

const NavigationListItems = ({ activeSection, onNavigate }: Props) => {
  const navbarItems = [
    { href: "#home", text: "Home" },
    { href: "#about", text: "O mnie" },
    { href: "#projects", text: "Projekty" },
    { href: "#contact", text: "Kontakt" },
  ];

  return (
    <ul
      className="flex flex-wrap items-center gap-x-7 gap-y-2 max-lg:flex-col max-lg:items-stretch max-lg:gap-4 max-lg:flex max-lg:min-h-11 max-lg:px-3 max-lg:py-2"
      onClick={(event) => {
        if (event.target instanceof Element && event.target.closest("a")) {
          onNavigate?.();
        }
      }}>
      {navbarItems.map((item) => (
        <NavbarItem
          key={item.href}
          href={item.href}
          activeSection={activeSection}>
          {item.text}
        </NavbarItem>
      ))}
    </ul>
  );
};

export default NavigationListItems;
