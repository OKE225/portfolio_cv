import NavbarItem from "@/components/Navbar/NavbarItem";
import user from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

test("render list element with props", () => {
  render(
    <NavbarItem id={1} href="#home" closeMenu={() => {}} activeSection="#home">
      Home
    </NavbarItem>,
  );

  const listElement = screen.getByRole("listitem");
  const link = screen.getByRole("link", { name: /home/i });

  expect(listElement).toBeInTheDocument();
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute("href", "#home");
  expect(link).toHaveTextContent("Home");
});

test("call closeMenu on click", async () => {
  const mockCloseMenu = jest.fn();

  render(
    <NavbarItem
      id={1}
      href="#home"
      closeMenu={mockCloseMenu}
      activeSection="#home">
      Home
    </NavbarItem>,
  );

  const link = screen.getByRole("link", { name: /home/i });

  await user.click(link);

  expect(mockCloseMenu).toHaveBeenCalled();
});

test("class when activeSection match href", () => {
  render(
    <NavbarItem id={1} href="#home" closeMenu={() => {}} activeSection="#home">
      Home
    </NavbarItem>,
  );

  const listElement = screen.getByRole("listitem");

  expect(listElement).toBeInTheDocument();
  expect(listElement).toHaveClass("text-zinc-50");
  expect(listElement).not.toHaveClass("text-gray-500");
});

test("class when activeSection not match href", () => {
  render(
    <NavbarItem id={1} href="#home" closeMenu={() => {}} activeSection="#about">
      Home
    </NavbarItem>,
  );

  const listElement = screen.getByRole("listitem");

  expect(listElement).toBeInTheDocument();
  expect(listElement).toHaveClass("text-gray-500");
  expect(listElement).not.toHaveClass("text-zinc-50");
});
