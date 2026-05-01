import WelcomeText from "@/components/Hero/WelcomeText";
import { render, screen } from "@testing-library/react";

test("render heading with name", () => {
  render(<WelcomeText />);

  const heading = screen.getByRole("heading", { name: /patryk/i });

  expect(heading).toBeInTheDocument();
});
