import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  const projectsCard = [
    {
      id: 1,
      image: "/images/newportfolio.jpg",
      title: "Newest portfolio",
      link: "https://magical-mochi-ef492f.netlify.app/",
      description:
        "I updated the last portfolio I coded, did  a lot of changes on the design and the code as I have learned more compare to when I first developed it. This is the perfect place for you to get to know me as a developer and dig in to all my previous projects. Stay tune, there's more to come. ",
    },
    {
      id: 2,
      image: "/images/holidaze.jpg",
      title: "‘Holidaze",
      link: "https://dazzling-medovik-426cf6.netlify.app/",
      description:
        "The very last project exam, and this time I developed a hotel booking website called Holidaze. It's developed with the users in mind, to have clean and simple layout with easy navigation. This project was a huge challenge, which I learned tons along the way, and I am very happy with the result. ",
    },
    {
      id: 3,
      image: "/images/ili.jpg",
      title: "‘ili, skincare",
      link: "https://keen-kirch-bf42aa.netlify.app/",
      description:
        "This is the latest project I’ve done which was for the semester project, in the first semester of the 2nd year. ",
    },
    {
      id: 3,
      image: "/images/theyaycompany.jpg",
      title: "The YAY Company",
      link: "https://quirky-carson-644238.netlify.app/",
      description:
        "This website was fun, and it was actually the first one where I used Bootstrap for the first time. The design is created by school, as we got this project to practice to make everyting pixel perfect according to the design. Gotta have an eye for details for this one, because there were so many different gradients, shadow and etc. ",
    },
    {
      id: 4,
      image: "/images/portfolio.jpg",
      title: "My first portfolio",
      link: "https://sharp-hermann-17c8a0.netlify.app/",
      description:
        "This was one of the most fun project I’ve done so far. Last exam in the 1st year and was able to be very creative and do someting that represents me to the fullest.",
    },
    {
      id: 5,
      image: "/images/happytravel2.jpg",
      title: "HappyTravel",
      link: "https://compassionate-allen-d47a37.netlify.app/",
      description:
        "Wanted to make a clean and minimalistic design for this exam from the 1st year. Thought it was important you create something that was easy on the eye to read, and to also make the picture in focus. ",
    },
    {
      id: 6,
      image: "/images/givingtree.jpg",
      title: "Giving Tree",
      link: "https://elastic-nightingale-265b77.netlify.app/",
      description:
        "This small project is the Interaction Design course we did in the 1st year. Even if it’s not responsive I’m still happy about some of the design elements and for coding it.",
    },
    {
      id: 7,
      image: "/images/pokemon.jpg",
      title: "Pokemon",
      link: "https://cranky-benz-dc8db0.netlify.app/",
      description:
        "First small project I did for the JavaScript course assignment in the first year. It's a small project which I'm still proud of, mostly because I didn't really have a clue about JavaScript back then and somehow I managed to put this together. ",
    },
  ];

  return (
    <div>
      {projectsCard.map(({ image, title, description, id, link }) => (
        <div key={id} className="cards">
          <div>
            <Link href={link} passHref>
              <a>
                <Image
                  src={image}
                  alt={title}
                  width={1100}
                  height={700}
                  className="cards__img"
                />
              </a>
            </Link>
          </div>
          <h2 className="cards__heading">{title}</h2>
          <p className="cards__bodytext">{description}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;