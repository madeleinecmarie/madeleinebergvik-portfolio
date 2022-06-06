import Head from "next/head";
import Image from "next/image";
import AboutImg from "../public/images/aboutimg.png";

// Components
import { Nav } from "../components/nav/Nav";
import Footer from "../components/footer/Footer";

export default function Index() {
  return (
    <>
      <Head>
        <title></title>
        <meta
          name="description"
          content="Hi! I'm Madeleine Bergvik, and welcome to my portfolio. This is a place where you can get to know me as a developer, and the work I have done. You can read more about me on this page."
        />
      </Head>
      <header className="header header-layout">
        <Nav />
      </header>

      <main className="about">
        <div className="about__wrapper">
          <div className="about__text-wrapper">
            <h1 className="about__headline">About</h1>
            <div className="about__text">
              <p className="about__p">
                Hi there, I am Madeleine - a newly graduate of the front end
                program at Noroff. I have so far 2 year of experience within
                front end, and I am very motivated to find my very first front
                end job!
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
              <p className="about__p">
                Noroff has been a great place to develop both as a person and as
                a developer. I have learned so much during these two years and I
                am very excited about how much I will learn in the future.
              </p>
            </div>
          </div>
          <div className="about__img">
            <Image
              src={AboutImg}
              alt="Illustration of a girl with long hair"
              width={400}
              height={600}
            ></Image>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
