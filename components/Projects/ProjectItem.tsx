"use client";

import { useState } from "react";
import ProjectModal from "./ProjectModal";
import Image from "next/image";
import Link from "next/link";

const ProjectItem = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="card overflow-hidden bg-slate-900">
      <Link href="" className="block w-full relative aspect-video">
        <Image
          src="https://placehold.co/600x400.png"
          alt="placeholder"
          fill
          className="object-cover"
        />
      </Link>

      <div className="card-body">
        <h3 className="card-title">Project Name</h3>
        <div className="card-actions inline-block">
          <p
            className="text-rose-500 link no-underline"
            onClick={() => setIsOpen((prev) => !prev)}>
            Details →
          </p>
        </div>

        {isOpen && <ProjectModal onClose={() => setIsOpen(false)} />}
      </div>
    </div>
  );
};

export default ProjectItem;
