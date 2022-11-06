import Link from "next/link";
import { ProjectTechPill } from "./ProjectTechPill";

type ProjectType = {
  name: string;
  stack: string[][];
  type: string;
  headerImgSrc: string;
  links: {
    type: string;
    url: string;
    tooltip: string;
  }[];
  description: string;
};

export type ProjectCardProps = {
  project: ProjectType;
  baseImagePath: string;
};

export const ProjectCard = ({ project, baseImagePath }: ProjectCardProps) => {
  const getImagePath = () => baseImagePath + project.headerImgSrc;

  return (
    <div className="h-full pb-4 flex-grow flex flex-col gap-2 bg-amber-100 dark:bg-stone-900 rounded-lg overflow-hidden">
      <img src={getImagePath()} />
      <div className="px-2 flex flex-col md:flex-row justify-end md:items-end md:justify-between">
        <h1 className="font-nunito text-2xl font-bold">
          {project.name.toLowerCase()}
        </h1>
        <h2 className="font-nunito text-lg">{project.type}</h2>
      </div>
      <div className="px-2 flex flex-row flex-wrap gap-2">
        {project.stack.map(([long, short], i) => (
          <ProjectTechPill techFullname={long} techShortname={short} key={i} />
        ))}
      </div>
      <p className="px-4 font-inter text-justify flex-grow">
        {project.description}
      </p>
      {project.links.map((link, i) => (
        <Link
          href={link.url}
          title={link.tooltip}
          className="mx-8 py-2 text-xl text-center font-nunito bg-emerald-500 dark:bg-fuchsia-500 text-stone-800 dark:text-stone-100 rounded-lg transition-all duration-1000"
          referrerPolicy="no-referrer"
          target="_blank"
          key={i}
        >
          {link.type === "deployed" && "Go to project."}
          {link.type === "repo" && "View repo."}
          {link.type === "github-repo" && "View me on GitHub."}
        </Link>
      ))}
    </div>
  );
};
