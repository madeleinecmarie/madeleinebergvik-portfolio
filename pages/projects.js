import Head from "next/head";

// Components
import { Nav } from "../components/nav/Nav";
import Footer from "../components/footer/Footer";
import Projects from "../components/projects/ProjectsCard";

export default function Index() {
  return (
    <>
      <Head>
        <title>CV</title>
        <meta
          name="description"
          content="Hi! I'm Madeleine Bergvik, and welcome to my portfolio. This is a place where you can get to know me as a developer, and the work I have done."
        />
      </Head>
      <header className="header">
        <Nav />
      </header>

      <main className="projects">
        <h1 className="">My projects</h1>
        <p>
          This is some of the projects I have done the last two years after
          starting the studies at Noroff.
        </p>
        <div>
          <Projects />
        </div>
      </main>
      <Footer />
    </>
  );
}
