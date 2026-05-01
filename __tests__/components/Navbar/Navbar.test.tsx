import Navbar from "@/components/Navbar/Navbar";
import user from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

const navbarItems = [
  { href: "#home", text: "Home" },
  { href: "#about", text: "O mnie" },
  { href: "#projects", text: "Projekty" },
  { href: "#contact", text: "Kontakt" },
];

test("render nav with elements", () => {
  render(<Navbar />);

  const checkbox = screen.getByRole("checkbox");
  const nav = screen.getByRole("navigation");
  const list = screen.getByRole("list");

  expect(checkbox).toBeInTheDocument();
  expect(nav).toBeInTheDocument();
  expect(list).toBeInTheDocument();
});

test("toggle nav visibility when checkbox is clicked", async () => {
  render(<Navbar />);

  const checkbox = screen.getByRole("checkbox");
  const nav = screen.getByRole("navigation");

  expect(nav).toHaveClass("hidden");

  await user.click(checkbox);

  expect(nav).toHaveClass("flex");

  await user.click(checkbox);

  expect(nav).toHaveClass("hidden");
});

test("map render navbar items", () => {
  render(<Navbar />);

  navbarItems.forEach((item) => {
    const link = screen.getByRole("link", { name: `<${item.text} />` });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", item.href);
  });

  const listItems = screen.getAllByRole("listitem");
  expect(listItems).toHaveLength(navbarItems.length);
});
