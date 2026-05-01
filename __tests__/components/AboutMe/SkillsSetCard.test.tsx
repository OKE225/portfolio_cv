import SkillsSetCard from "@/components/AboutMe/SkillsSetCard";
import { render, screen } from "@testing-library/react";

const techList = [
  {
    name: "NextJS",
    icon: "icon-[akar-icons--nextjs-fill]",
  },
  {
    name: "React",
    icon: "icon-[akar-icons--react-fill]",
  },
];

test("render heading and technologies", () => {
  render(<SkillsSetCard title="Technologies" techList={techList} />);

  const heading = screen.getByRole("heading", { name: /technologies/i });

  expect(heading).toBeInTheDocument();
});

test("render all techList item", () => {
  render(<SkillsSetCard title="Technologies" techList={techList} />);

  techList.forEach((tech) => {
    const badge = screen.getByText(tech.name);
    expect(badge).toBeInTheDocument();
  });
});
