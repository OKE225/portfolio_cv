import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import CTA from "@/components/Hero/CTA";

test("render 2 buttons", () => {
  render(<CTA />);

  const messageButton = screen.getByRole("button", {
    name: /wyślij wiadomość/i,
  });
  const projectsButton = screen.getByRole("button", {
    name: /moje projekty/i,
  });

  expect(messageButton).toBeInTheDocument();
  expect(projectsButton).toBeInTheDocument();
});

test("click on buttons without error", async () => {
  render(<CTA />);

  const messageButton = screen.getByRole("button", {
    name: /wyślij wiadomość/i,
  });
  const projectsButton = screen.getByRole("button", {
    name: /moje projekty/i,
  });

  await user.click(messageButton);
  await user.click(projectsButton);

  expect(true).toBe(true);
});
