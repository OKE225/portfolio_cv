import { render, screen } from "@testing-library/react";
import ProgrammingLanguageItem from "@/components/AboutMe/ProgrammingLanguageItem";

test("render language badge", () => {
  render(<ProgrammingLanguageItem name="React" icon="icon-react" />);

  expect(screen.getByText("React")).toBeInTheDocument();
  expect(screen.getByTestId("icon")).toHaveClass("icon-react");
});
