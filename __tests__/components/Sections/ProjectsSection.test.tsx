import ProjectsSection from "@/components/Sections/ProjectsSection";
import { render, screen } from "@testing-library/react";

test("render all components from projects section", () => {
  render(<ProjectsSection />);

  const mainHeader = screen.getByRole("heading", { name: /moje projekty/i });
  const showMoreBtn = screen.getByRole("button", { name: /pokaż więcej/i });

  expect(mainHeader).toBeInTheDocument();
  expect(showMoreBtn).toBeInTheDocument();
});
