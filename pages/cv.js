import Head from "next/head";

// Components
import { Nav } from "../components/nav/Nav";
import Footer from "../components/footer/Footer";

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

      <main className="cv">
        <h1 className="cv__headline">My CV</h1>
        {/* <h2>Work experience</h2> */}
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

          <div>
            <h3>Bik Bok</h3>
            <p>Sales, part time</p>
            <p>August 2014 - August 2015</p>
            <p>Internship from August 2013- August 2014</p>
          </div>

          <div className="work__div-4">
            <h3>Aquamann AS</h3>
            <p>Summerjob</p>
            <p>Cleaned the office</p>
            <p>Summer of 2009, 2010, 2011</p>
          </div>
        </div>
        <div className="cv__funfact">
          <h3 className="cv__funfact-headline">Fun fact:</h3>
          <p>
            I am 50/50 Swedish and Norwegian. I grew up in Sweden, but have for
            the last 7 years lived in Norway. I speak both languages fluently.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
