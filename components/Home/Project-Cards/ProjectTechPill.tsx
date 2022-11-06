import {
  SiAngular,
  SiBootstrap,
  SiExpress,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { MdCode } from "react-icons/md";

const iconSize: number = 14;

const toIcon = (shortName: string) => {
  switch (shortName) {
    case "angular":
      return <SiAngular size={iconSize} />;
    case "bootstrap":
      return <SiBootstrap size={iconSize} />;
    case "express":
      return <SiExpress size={iconSize} />;
    case "mongodb":
      return <SiMongodb size={iconSize} />;
    case "node":
      return <SiNodedotjs size={iconSize} />;
    case "react":
      return <SiReact size={iconSize} />;
    case "sass":
      return <SiSass size={iconSize} />;
    case "tailwind":
      return <SiTailwindcss size={iconSize} />;
    case "typescript":
      return <SiTypescript size={iconSize} />;
    default:
      return <MdCode size={iconSize} />;
  }
};

type ProjectPillProps = {
  techFullname: string;
  techShortname: string;
};

export const ProjectTechPill = ({
  techFullname,
  techShortname,
}: ProjectPillProps) => {
  return (
    <div className="w-fit flex flex-row items-center bg-amber-300 dark:bg-fuchsia-300 text-stone-800 rounded-full overflow-hidden">
      <span className="bg-amber-500 dark:bg-fuchsia-700 rounded-full p-1">
        {toIcon(techShortname)}
      </span>
      <span className="pl-2 pr-4 text-sm">{techFullname.toLowerCase()}</span>
    </div>
  );
};
