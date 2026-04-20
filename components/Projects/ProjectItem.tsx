"use client";

import { useState } from "react";
import ProjectModal from "./ProjectModal";
import Image from "next/image";
import Link from "next/link";

const ProjectItem = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <Link href="" className="block w-full relative aspect-video">
        <Image
          src="https://placehold.co/600x400.png"
          alt="placeholder"
          fill
          className="object-cover hover:scale-105 hover:rotate-1 transition ease-in-out"
        />
      </Link>

      <h3 className="text-3xl font-bold">Project Name</h3>
      <p
        className="inline-block text-rose-500 text-lg underline cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}>
        Details →
      </p>

      {isOpen && <ProjectModal onClose={() => setIsOpen(false)} />}
    </div>
  );
};

export default ProjectItem;
