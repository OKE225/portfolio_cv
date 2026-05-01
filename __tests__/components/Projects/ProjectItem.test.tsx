import ProjectItem from "@/components/Projects/ProjectItem";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

const mockProject = {
  id: 0,
  title: "Test Project",
  description: "Opis projektu",
  techStack: [
    {
      name: "NextJS",
      icon: "icon-[akar-icons--nextjs-fill]",
    },
    {
      name: "React",
      icon: "icon-[akar-icons--react-fill]",
    },
  ],
  image: "/test.png",
  liveUrl: "https://test.pl",
  repoUrl: "https://github.com/test",
};

test("render project card with default information", () => {
  render(<ProjectItem {...mockProject} />);

  const image = screen.getByRole("img");
  const heading = screen.getByRole("heading", { name: mockProject.title });
  const moreDetailsBtn = screen.getByRole("button");

  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("alt", mockProject.title);
  expect(heading).toBeInTheDocument();
  expect(heading).toHaveTextContent(mockProject.title);
  expect(moreDetailsBtn).toBeInTheDocument();
  expect(moreDetailsBtn).toHaveTextContent("zobacz więcej");
});

test("show project details after button click", async () => {
  render(<ProjectItem {...mockProject} />);

  const image = screen.getByRole("img");
  const heading = screen.getByRole("heading", { name: mockProject.title });
  const moreDetailsBtn = screen.getByRole("button");

  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("alt", mockProject.title);
  expect(heading).toBeInTheDocument();
  expect(heading).toHaveTextContent(mockProject.title);
  expect(moreDetailsBtn).toBeInTheDocument();
  expect(moreDetailsBtn).toHaveTextContent("zobacz więcej");

  await user.click(moreDetailsBtn);

  const description = screen.getByRole("paragraph");
  const [liveLink, repoLink] = screen.getAllByRole("link");

  expect(description).toBeInTheDocument();
  expect(description).toHaveTextContent(mockProject.description);
  expect(screen.getByText("NextJS")).toBeInTheDocument();
  expect(screen.getByText("React")).toBeInTheDocument();
  expect(liveLink).toBeInTheDocument();
  expect(liveLink).toHaveAttribute("href", mockProject.liveUrl);
  expect(liveLink).toHaveAttribute("target", "_blank");
  expect(repoLink).toBeInTheDocument();
  expect(repoLink).toHaveAttribute("target", "_blank");
  expect(moreDetailsBtn).toHaveTextContent("ukryj");
});
