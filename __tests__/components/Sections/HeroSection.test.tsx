import HeroSection from "@/components/Sections/HeroSection";
import { render, screen } from "@testing-library/react";

test("render all components from hero section", () => {
  render(<HeroSection />);

  const welcomeHeading = screen.getByRole("heading", {
    name: /jestem patryk/i,
  });
  const professionHeading = screen.getByRole("heading", {
    name: /frontend developer/i,
  });
  const paragraph = screen.getByRole("paragraph");
  const messageButton = screen.getByRole("button", {
    name: /wyślij wiadomość/i,
  });
  const projectsButton = screen.getByRole("button", {
    name: /moje projekty/i,
  });
  const [githubLink, linkedinLink] = screen.getAllByRole("link");

  expect(welcomeHeading).toBeInTheDocument();
  expect(professionHeading).toBeInTheDocument();
  expect(paragraph).toBeInTheDocument();
  expect(messageButton).toBeInTheDocument();
  expect(projectsButton).toBeInTheDocument();
  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute("href", "https://github.com/OKE225");
  expect(linkedinLink).toBeInTheDocument();
  expect(linkedinLink).toHaveAttribute(
    "href",
    "https://www.linkedin.com/in/patryk-jastrz%C4%99bowski",
  );
});
