"use client";

import { Project } from "@/lib/portfolioData";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({
  image,
  title,
  description,
  techStack,
  liveUrl,
  repoUrl,
}: Project) => {
  return (
    <div className="bg-[rgb(15,17,50)] flex flex-col h-full border border-[rgb(42,45,92)] transition hover:shadow-[6px_6px_0_rgba(255,255,255,0.05)] motion-safe:hover:-translate-y-2">
      <div className="bg-[rgb(18,20,58)] flex flex-col min-h-47.5 border-b border-b-[rgb(42,45,92)]">
        <div className="flex items-center gap-1.5 px-3 h-7 border-b border-b-[rgb(42,45,92)]">
          <span className="block w-2 h-2 bg-rose-500" />
          <span className="block w-2 h-2 bg-[rgb(42,45,92)]" />
          <span className="block w-2 h-2 bg-[rgb(42,45,92)]" />
        </div>

        <Image
          src={image}
          width={1920}
          height={1080}
          className="aspect-video object-contain"
          alt={title}
        />
      </div>

      <div className="flex flex-1 flex-col p-6 gap-4 max-sm:p-4">
        <h3 className="text-[26px] text-white font-pixelify font-semibold m-0">
          {title}
        </h3>
        <p className="text-[15px] m-0">{description}</p>

        <div className="flex flex-wrap gap-2">
          {techStack.map((language, index) => (
            <span
              key={index}
              className="text-xs text-[rgb(213,216,238)] py-0.75 px-2.5 border border-[rgb(42,45,92)]">
              {language}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2.5 mt-auto">
          {liveUrl && (
            <Link
              target="_blank"
              href={liveUrl}
              className="flex items-center gap-2 text-rose-500 border-2 border-rose-500 text-sm! font-semibold py-2.5! px-5! w-fit!">
              Live project <MoveUpRight strokeWidth={5} size={10} />
            </Link>
          )}

          {repoUrl && (
            <Link
              href={repoUrl}
              target="_blank"
              className="flex items-center gap-2 text-white text-sm font-semibold py-2.5 px-5 border-2 border-[rgb(42,45,92)]">
              Kod <MoveUpRight strokeWidth={5} size={10} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
