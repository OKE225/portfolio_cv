import SocialIcon from "@/components/Hero/SocialIcon";
import { render, screen } from "@testing-library/react";

test("render link with props", () => {
  render(<SocialIcon icon="icon-github" link="https://github.com/OKE225" />);

  const link = screen.getByRole("link");
  const icon = screen.getByTestId("icon");

  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute("href", "https://github.com/OKE225");
  expect(link).toHaveAttribute("target", "_blank");
  expect(icon).toHaveClass("icon-github");
});
