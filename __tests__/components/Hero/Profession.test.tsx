import Profession from "@/components/Hero/Profession";
import { render, screen } from "@testing-library/react";

test("render heading with content", () => {
  render(<Profession />);

  const heading = screen.getByRole("heading", { name: /frontend developer/i });

  expect(heading).toBeInTheDocument();
});
