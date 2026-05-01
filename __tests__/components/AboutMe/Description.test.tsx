import { render, screen } from "@testing-library/react";
import Description from "@/components/AboutMe/Description";

test("render 2 paragraphs in description", () => {
  render(<Description />);

  const paragraphs = screen.getAllByRole("paragraph");

  expect(paragraphs).toHaveLength(2);
});
