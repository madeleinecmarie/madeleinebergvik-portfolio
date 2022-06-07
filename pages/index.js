import Head from "next/head";

// Components
import { Nav } from "../components/nav/Nav";
import Footer from "../components/footer/Footer";
import Projects from "../components/projects/ProjectsCard";

export default function Index() {
  return (
    <>
      <Head>
        <title>Madeleine Bergvik - portfolio</title>
        <meta
          name="description"
          content="Hi! I'm Madeleine Bergvik, and welcome to my portfolio. This is a place where you can get to know me as a developer, and the work I have done."
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <header className="header">
        <Nav />
      </header>

      <div className="hero">
        <div className="hero__inner">
          <div className="hero__text">
            <h1 className="hero__headline">
              Madeleine <span className="hero__span">Bergvik</span>
            </h1>
            <p className="hero__bottom-text">Coder with an eye for design</p>
          </div>
        </div>
        <div className="hero__bodytext-wrapper">
          <p className="hero__bodytext">
            Hi, Im Madeleine & Im a front end developer student with an eye for
            design. Currently finishing up my last year at Noroff. I care a lot
            about using my skills for a positive impact and are over the average
            passioned about good userbility and high quality.
          </p>
        </div>
      </div>

      <main>
        <div className="projects" id="projects">
          <h1>Projects</h1>

          <div>
            <Projects />
          </div>
        </div>
        <div className="bottom-section">
          <div className="about" id="info">
            <h2 className="about__headline">About</h2>
            <div className="about__text">
              <p className="about__p">
                Hi there, I am a front end student at Noroff. I have so far 2
                year of experience within front end, and I am very motivated to
                find my very first front end job!
              </p>
              <p className="about__p">
                I have for the 5 latest years lived in Moss with my partner, I
                just love the balance of the city, nature and the ocean.
              </p>
              <p className="about__p">
                Over the years I have worked as a barista at Stockfleths, and
                learned everything about customer service, good quality and
                working in a team. I have already had the time to be an
                assistant manager for several years and even had the opporunity
                to be the manager for almost a year, and learned a lot about
                leadership, business operation, and teambuilding.
              </p>
            </div>
          </div>

          <div className="funfact">
            <h3 className="funfact__headline">Fun fact:</h3>
            <p className="funfact__bodytext">
              I am 50/50 Swedish and Norwegian. I grew up in Sweden, but have
              for the last 7 years lived in Norway. I speak both languages
              fluently.
            </p>
          </div>

          <div className="language">
            <h2>Skills</h2>
            <div className="language__wrapper">
              <div className="language__inner">
                <h3 className="language__subheading">Code</h3>
                <p>Visual Studio Code</p>
                <p>Github</p>
                <p>Netlify</p>
                <p>Terminal</p>
                <p>Tailwind</p>
                <p>Bootstrap</p>
                <p>Wordpress</p>
                <p>Heroku</p>
                <p>Strapi</p>
              </div>
              <div className="language__inner">
                <h3 className="language__subheading">Languages</h3>
                <p>HTML</p>
                <p>CSS</p>
                <p>Javascript</p>
                <p>SASS</p>
                <p>React</p>
                <p>Next.js</p>
                <p>GraphQL</p>
                <p>Styled-components</p>
              </div>
              <div className="language__inner">
                <h3 className="language__subheading">Design</h3>
                <p>Adobe XD</p>
                <p>Figma</p>
              </div>
            </div>
          </div>
          <div className="skills">
            <h2>Personal skills</h2>
            <div className="skills__inner">
              <p>Teamwork</p>
              <p>Structured</p>
              <p>Creativity</p>
              <p>Leadership</p>
              <p>Adaptibility</p>
            </div>
          </div>
          <div className="work-wrapper">
            <h2 className="work-wrapper__headline">Experience</h2>
          </div>
          <div className="work">
            <div className="work__div-1">
              <div>
                <h3>Lee, Oslo Fashion Outlet</h3>
                <p>Part-time</p>
                <p>January 2020 - present</p>
              </div>
              <div>
                <h3>Glassperlen boligsameie</h3>
                <p>Board member</p>
                <p>April 2018 - present</p>
              </div>

              <div>
                <h3>Stockfleths</h3>
                <p>Barista</p>
                <p>Former manager & ass. manager</p>
                <p>October 2015 - present</p>
              </div>
            </div>
            <div className="work__div-2">
              <div>
                <h3>Waynes Coffee</h3>
                <p>Barista</p>
                <p>July 2015 - November 2015</p>
              </div>
              <div>
                <h3>Bik Bok</h3>
                <p>Sales, part time</p>
                <p>August 2014 - August 2015</p>
                <p>Internship August 2013- August 2014</p>
              </div>
              <div>
                <h3>Aquamann</h3>
                <p>Summerjob</p>
                <p>2009, 2010, 2011</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
