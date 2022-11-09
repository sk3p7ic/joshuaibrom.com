import { About } from "../components/Home/About";
import { Banner } from "../components/Home/Banner";
import { Projects } from "../components/Home/Projects";
import { Socials } from "../components/Home/Socials";

const HomePage = () => {
  return (
    <main className="flex flex-col gap-8">
      <Banner />
      <Projects />
      <About />
      <Socials />
    </main>
  );
};

export default HomePage;
