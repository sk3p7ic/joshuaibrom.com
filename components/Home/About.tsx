import Link from "next/link";
import { MdFileDownload } from "react-icons/md";
import EmploymentHistory from "../../lib/employment.json";

export const About = () => {
  return (
    <div id="about">
      <h3 className="font-raleway text-4xl text-emerald-700 dark:text-cyan-500 transition-colors duration-1000">
        about.
      </h3>
      <p className="font-inter text-lg md:text-justify">
        I&apos;m a computer science student from San Antonio, Texas with a
        passion for expanding my skillset. I have a background in Java and
        Python and have since expanded into learning more about web development,
        having used technologies such as React, Vue, Angular, and some Django. I
        am currently a student at Texas A&amp;M - San Antonio where I am
        studying computer science. As a student, I have taken courses in C++,
        Java, Python, Powershell, and Bash, as well as a web development course
        focusing on Node.js applications using Express and MongoDB.
      </p>
      <Link
        href="/res/Resume.pdf"
        target="_blank"
        referrerPolicy="no-referrer"
        className="flex flex-row items-center gap-2 underline text-lg text-emerald-500 hover:text-emerald-800 dark:text-fuchsia-500 dark:hover:text-fuchsia-800 transition-colors"
      >
        <MdFileDownload size={24} />
        <span>My Resume</span>
      </Link>
    </div>
  );
};
