import HeadingText from "@/components/HeadingText";
import { render, screen } from "@testing-library/react";

test("render main header with title", () => {
  render(<HeadingText>Home</HeadingText>);

  const heading = screen.getByRole("heading", { name: /home/i });

  expect(heading).toBeInTheDocument();
  expect(heading).toHaveTextContent(/home/i);
});
