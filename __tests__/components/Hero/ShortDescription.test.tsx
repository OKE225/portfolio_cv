import ShortDescription from "@/components/Hero/ShortDescription";
import { render, screen } from "@testing-library/react";

test("render paragraph with content", () => {
  render(<ShortDescription />);

  const paragraph = screen.getByRole("paragraph");

  expect(paragraph).toBeInTheDocument();
  expect(screen.getByText(/frontend/i)).toBeInTheDocument();
});
