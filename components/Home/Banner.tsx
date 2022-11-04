import Image from "next/image";
import ProfileImage from "../../public/res/media/img/profile.png";

export const Banner = () => {
  return (
    <div
      className="flex flex-row justify-center items-center gap-12 py-4 border-b border-b-stone-800 dark:border-b-stone-100 transition-colors"
      id="home"
    >
      <Image
        src={ProfileImage}
        alt="Me."
        className="rounded-full w-28 h-28 xl:w-36 xl:h-36 border border-stone-800 dark:border-stone-100 transition-colors"
      />
      <div className="flex flex-col font-nunito">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-8xl font-bold">
          Joshua Ibrom
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-amber-700 dark:text-fuchsia-500 transition-colors duration-1000">
          programmer. student. coffee addict.
        </h2>
      </div>
    </div>
  );
};
