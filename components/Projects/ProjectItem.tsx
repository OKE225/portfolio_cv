"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/lib/portfolioData";
import ProgrammingLanguageItem from "../AboutMe/ProgrammingLanguageItem";
import SocialIcon from "../Hero/SocialIcon";

const ProjectItem = ({
  id,
  image,
  title,
  description,
  techStack,
  liveUrl,
  repoUrl,
}: Project) => {
  const [showDetails, setShowDetails] = useState<boolean>(false);

  return (
    <div
      className={`card hover:scale-99 transition overflow-hidden bg-slate-900 h-fit intersect-once intersect:motion-preset-focus intersect:motion-delay-${id * 500 + 500}`}
      data-testid="project-card">
      <Link
        href={`${liveUrl}`}
        target="_blank"
        className="block w-full relative aspect-video">
        <Image
          src={image || ""}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />
      </Link>

      <div className="card-body p-5">
        <h3 className="card-title text-3xl max-xl:text-2xl">{title}</h3>
        {showDetails && (
          <div>
            <p className="text-gray-400">{description}</p>
            <div className="flex flex-wrap gap-1 mt-3">
              {techStack?.map((tech) => (
                <ProgrammingLanguageItem
                  key={tech.name}
                  name={tech.name}
                  icon={tech.icon}
                />
              ))}
            </div>
            <div className="card-actions mt-8 flex flex-nowrap h-full justify-center items-center">
              <Link
                href={`${liveUrl}`}
                target="_blank"
                className="text-rose-500 w-full text-center shadow-[inset_0_0_0_2px] shadow-rose-500 hover:scale-98 transition font-bold py-2">
                Live project
              </Link>
              <SocialIcon icon="icon-[pixel--github]" link={`${repoUrl}`} />
            </div>
          </div>
        )}
        <div className="inline-block">
          <button
            className="text-rose-500 link underline"
            onClick={() => setShowDetails((prev) => !prev)}>
            {!showDetails ? "zobacz więcej" : "ukryj"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
