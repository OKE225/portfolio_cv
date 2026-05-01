import SubHeadingText from "@/components/SubHeadingText";
import { render, screen } from "@testing-library/react";

test("render subheader with title", () => {
  render(<SubHeadingText>Sub title</SubHeadingText>);

  const subHeader = screen.getByRole("heading", { name: /sub/i });

  expect(subHeader).toBeInTheDocument();
  expect(subHeader).toHaveTextContent(/sub/i);
});
