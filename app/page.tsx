import { Banner } from "../components/Home/Banner";
import { Projects } from "../components/Home/Projects";

const HomePage = () => {
  return (
    <main className="flex flex-col gap-8">
      <Banner />
      <Projects />
    </main>
  );
};

export default HomePage;
