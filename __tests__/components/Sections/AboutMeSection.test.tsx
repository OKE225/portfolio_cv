import AboutMeSection from "@/components/Sections/AboutMeSection";
import { render, screen, within } from "@testing-library/react";

test("render all components from about me section", () => {
  render(<AboutMeSection />);

  const mainHeader = screen.getByRole("heading", { name: /o mnie/i });
  const descriptionParagraphs = within(
    screen.getByTestId("description"),
  ).getAllByRole("paragraph");
  const skillElements = screen.getAllByTestId("skillElement");
  const subHeader = screen.getByRole("heading", { name: /technologie/i });
  const technologiesCards = screen.getAllByTestId("technologyCard");

  expect(mainHeader).toBeInTheDocument();
  expect(descriptionParagraphs).toHaveLength(2);
  expect(skillElements).toHaveLength(6);
  expect(subHeader).toBeInTheDocument();
  expect(technologiesCards).toHaveLength(2);
});
