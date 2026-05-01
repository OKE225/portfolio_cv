import ContactSection from "@/components/Sections/ContactSection";
import { render, screen, within } from "@testing-library/react";
import user from "@testing-library/user-event";

test("render all components from contact section", () => {
  render(<ContactSection />);

  const mainHeader = screen.getByRole("heading", { name: /napisz do mnie/i });
  const nameInput = screen.getByRole("textbox", { name: /wpisz swoje imię/i });
  const emailInput = screen.getByRole("textbox", { name: /wpisz swój email/i });
  const messageInput = screen.getByRole("textbox", { name: /wiadomość/i });
  const submitBtn = screen.getByRole("button", { name: /wyślij wiadomość/i });

  const whyMeParagraphs = within(screen.getByTestId("why-me")).getAllByRole(
    "paragraph",
  );
  const whyMeList = within(screen.getByTestId("why-me")).getByRole("list");
  const whyMeElements = within(screen.getByTestId("why-me")).getAllByRole(
    "listitem",
  );

  expect(mainHeader).toBeInTheDocument();
  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(messageInput).toBeInTheDocument();
  expect(submitBtn).toBeInTheDocument();

  expect(whyMeParagraphs).toHaveLength(2);
  expect(whyMeList).toBeInTheDocument();
  expect(whyMeElements).toHaveLength(6);
});

test("fill inputs from form", async () => {
  render(<ContactSection />);

  const nameInput = screen.getByRole("textbox", { name: /wpisz swoje imię/i });
  const emailInput = screen.getByRole("textbox", { name: /wpisz swój email/i });
  const messageInput = screen.getByRole("textbox", { name: /wiadomość/i });

  await user.click(nameInput);
  await user.keyboard("John");

  await user.click(emailInput);
  await user.keyboard("john@john.com");

  await user.click(messageInput);
  await user.keyboard("Testowa wiadomość");

  expect(nameInput).toHaveValue("John");
  expect(emailInput).toHaveValue("john@john.com");
  expect(messageInput).toHaveValue("Testowa wiadomość");
});
