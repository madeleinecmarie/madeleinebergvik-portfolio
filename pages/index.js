import Head from "next/head";
import { Icon } from "@iconify/react";
import Image from "next/image";
import HeroImg from "../public/images/heroimg.png";

// Components
import { Nav } from "../components/nav/Nav";
import Footer from "../components/footer/Footer";

export default function Index() {
  return (
    <>
      <Head>
        <title>Madeleine Bergvik - portfolio</title>
        <meta
          name="description"
          content="Hi! I'm Madeleine Bergvik, and welcome to my portfolio. This is a place where you can get to know me as a developer, and the work I have done."
        />
      </Head>
      <header className="header">
        <Nav />
      </header>
      <div className="hero">
        <div className="hero__inner">
          <div className="hero__text">
            <h1 className="hero__headline">Madeleine Bergvik</h1>
            <p className="hero__bottom-text">
              Junior front end <span>developer</span>
            </p>
          </div>
          <div className="hero__img">
            <Image
              src={HeroImg}
              alt="Illustration of a girl with a laptop"
              height={440}
              width={490}
            ></Image>
          </div>
        </div>
      </div>

      <main>
        <div className="info">
          <p className="info__bodytext">
            Hi, Im Madeleine and I am a junior front end developer with an eye
            for design. Currently finishing up my last year of the two year
            Higher Proffessional Degree at Noroff in Oslo.
          </p>
          <p className="info__bodytext">
            I care a lot about using my skills for a positive impact and are
            over the average passioned about good userbility and high quality.
            <span className="info__span">Let me introduce myself.</span>
          </p>
        </div>
        <div className="icons">
          <h2>Software skills</h2>
          <div>
            <div className="icons__part-1">
              <Icon icon="akar-icons:html-fill" color="#85B4C2" height={90} />

              <Icon icon="akar-icons:css-fill" color="#4ba695" height={90} />
              <Icon
                icon="akar-icons:javascript-fill"
                color="#e9c78c"
                height={90}
              />
              <Icon icon="akar-icons:react-fill" color="#e19646" height={90} />
              <Icon
                icon="akar-icons:bootstrap-fill"
                color="#b77c87"
                height={90}
              />
              <Icon icon="akar-icons:github-fill" color="#34616d" height={90} />
            </div>
            <div className="icons__part-2">
              <Icon icon="cib:adobe-xd" color="#dfa789" height={90} />
              <Icon icon="bi:filetype-sass" color="#d9a360" height={90} />
              <Icon icon="akar-icons:figma-fill" color="#b77786" height={90} />
              <Icon icon="bi:wordpress" color="#6AA3B1" height={90} />
              <Icon icon="akar-icons:nextjs-fill" color="#c3d1ca" height={90} />
              <Icon icon="bxl:tailwind-css" color="#54909e" height={90} />
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
        <h2 className="work-headline">Work experience</h2>
        <div className="work">
          <div>
            <h3>Lee, Oslo Fashion Outlet</h3>
            <p>Part-time</p>
            <p>January 2020 - present</p>
          </div>
          <div className="work__div-2">
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
          <div className="work__div-4">
            <h3>Waynes Coffee</h3>
            <p>Barista</p>
            <p>July 2015 - November 2015</p>
          </div>

          {/* <div>
            <h3>Bik Bok</h3>
            <p>Sales, part time</p>
            p>August 2014 - August 2015</p>
            <p>Internship from August 2013- August 2014</p>
          </div> */}
          {/* <div>
            <h3>Aquamann</h3>
            <p>Summerjob</p>
            <p>2009, 2010, 2011</p>
          </div> */}
        </div>
        <div className="cv">
          <button className="cv__btn">See full CV</button>
        </div>
      </main>
      <Footer />
    </>
  );
}
