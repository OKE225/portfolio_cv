import SkillElement from "@/components/AboutMe/SkillElement";
import { render, screen } from "@testing-library/react";

test("render skill element with props", () => {
  render(
    <SkillElement id={1} title="Skill">
      Lorem ipsum
    </SkillElement>,
  );

  const heading = screen.getByRole("heading", { name: /skill/i });
  const paragraph = screen.getByText(/lorem ipsum/i);

  expect(heading).toBeInTheDocument();
  expect(paragraph).toBeInTheDocument();
});
