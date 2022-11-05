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
    <div className="flex flex-col gap-2 bg-amber-100 dark:bg-stone-900 rounded-lg overflow-hidden">
      <img src={getImagePath()} />
      <div className="px-2 flex flex-col md:flex-row justify-end md:items-end md:justify-between">
        <h1 className="font-nunito text-2xl font-bold">
          {project.name.toLowerCase()}
        </h1>
        <h2 className="font-nunito text-lg">{project.type}</h2>
      </div>
      <p className="px-4 pb-4 font-inter text-justify">{project.description}</p>
    </div>
  );
};
