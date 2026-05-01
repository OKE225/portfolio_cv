import Footer from "@/components/Sections/Footer";
import { render, screen } from "@testing-library/react";

test("render footer with content", () => {
  render(<Footer />);

  const paragraphs = screen.getAllByRole("paragraph");
  const headers = screen.getAllByRole("heading");
  const [githubLink, linkedinLink] = screen.getAllByRole("link");

  expect(paragraphs).toHaveLength(3);
  expect(headers).toHaveLength(2);
  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute("href", "https://github.com/OKE225");
  expect(linkedinLink).toBeInTheDocument();
  expect(linkedinLink).toHaveAttribute(
    "href",
    "https://www.linkedin.com/in/patryk-jastrz%C4%99bowski",
  );
  expect(screen.getByText(/frontend developer/i)).toBeInTheDocument();
  expect(screen.getByText(/© 2026 patryk jastrzębowski/i)).toBeInTheDocument();
  expect(screen.getByText(/wszelkie prawa zastrzeżone/i)).toBeInTheDocument();
});
