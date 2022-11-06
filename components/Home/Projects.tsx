import ProjectData from "../../lib/projects.json";
import { ProjectCard } from "./Project-Cards/ProjectCard";

export const Projects = () => {
  return (
    <div className="flex flex-col gap-4" id="projects">
      <h3 className="font-raleway text-4xl text-emerald-700 dark:text-cyan-500 transition-colors duration-1000">
        projects.
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {ProjectData.projects.map((p, i) => (
          <ProjectCard
            project={p}
            baseImagePath={ProjectData.baseImgPath}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};
