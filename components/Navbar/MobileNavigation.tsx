import NavigationListItems from "../UI/NavigationListItems";

const MobileNavigation = ({
  activeSection,
  setIsOpen,
}: {
  activeSection: string;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  return (
    <div className="absolute inset-x-0 top-full lg:hidden">
      <div className="overflow-y-auto border-b border-[rgb(42,45,92)] bg-[rgb(10,11,38)] px-6 py-5 shadow-[0_6px_0_rgba(255,255,255,0.05)] max-sm:px-4">
        <NavigationListItems
          activeSection={activeSection}
          onNavigate={() => setIsOpen(false)}
        />
      </div>
    </div>
  );
};

export default MobileNavigation;
