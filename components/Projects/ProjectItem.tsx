"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/lib/portfolioData";
import ProgrammingLanguageItem from "../AboutMe/ProgrammingLanguageItem";

const ProjectItem = ({
  image,
  title,
  description,
  techStack,
  liveUrl,
  repoUrl,
}: Project) => {
  const [showDetails, setShowDetails] = useState<boolean>(false);

  return (
    <div className="card overflow-hidden bg-slate-900 h-fit">
      <Link
        href={`${liveUrl}`}
        target="_blank"
        className="block w-full relative aspect-video">
        <Image
          src={image || ""}
          alt="website preview"
          fill
          className="object-cover"
        />
      </Link>

      <div className="card-body">
        <h3 className="card-title text-3xl max-xl:text-2xl">{title}</h3>
        {showDetails && (
          <div>
            <p className="text-gray-400">{description}</p>
            <div className="flex flex-wrap gap-1">
              {techStack?.map((tech) => (
                <ProgrammingLanguageItem
                  key={tech.name}
                  name={tech.name}
                  icon={tech.icon}
                />
              ))}
            </div>
            <div className="card-actions mt-10">
              <Link
                href={`${liveUrl}`}
                target="_blank"
                className="text-rose-500 shadow-[inset_0_0_0_2px] shadow-rose-500 font-bold px-4 py-2">
                Live project
              </Link>
              {/* <div>
                <SocialIcon
                  icon="icon-[mdi--github]"
                  link="https://github.com/OKE225"
                />
              </div> */}
            </div>
          </div>
        )}
        <div className="inline-block">
          <p
            className="text-rose-500 link underline"
            onClick={() => setShowDetails((prev) => !prev)}>
            {!showDetails ? "Zobacz więcej" : "Ukryj"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
