import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  const projectsCard = [
    {
      id: 1,
      image: "/images/holidaze.png",
      title: "‘Holidaze",
      link: "https://dazzling-medovik-426cf6.netlify.app/",
      githubLink:
        "https://github.com/madeleinecmarie/project-exam-2-madeleine-bergvik",
      description:
        "Holidaze is a place where you can easily book hotels, bed & breakfasts and apartments in Stavanger.",
    },
    {
      id: 2,
      image: "/images/rickandmorty.png",
      title: "Rick & Morty",
      link: "https://thunderous-sawine-e58f13.netlify.app/",
      githubLink:
        "https://github.com/madeleinecmarie/js-frameworks-ca-madeleinebergvik",
      description:
        "A website I made for the Javascript framworks course assigment. I used GraphQL for the assigment because I wanted a challenge.",
    },
    {
      id: 3,
      image: "/images/ili.png",
      title: "‘ili, skincare",
      link: "https://keen-kirch-bf42aa.netlify.app/",
      githubLink:
        "https://github.com/madeleinecmarie/madeleinebergvik-semesterproject",
      description:
        "'ili. is a place a website where you simply can buy cruelty free and vegan makeup online.",
    },
    {
      id: 4,
      image: "/images/oldportfolio.png",
      title: "Old portfolio",
      link: "https://sharp-hermann-17c8a0.netlify.app/",
      githubLink:
        "https://github.com/madeleinecmarie/portfolio-1-madeleinebergvik",
      description:
        "My old portfolio I did in the first year at Noroff. I was inspired by lots of colors and minimalism.",
    },
    {
      id: 5,
      image: "/images/happytravel.png",
      title: "HappyTravel",
      link: "https://compassionate-allen-d47a37.netlify.app/",
      githubLink:
        "https://github.com/madeleinecmarie/project-exam-1-madeleinebergvik",
      description:
        "HappyTravel is a blog I made for the first project exam at Noroff. It's minimalism with focus on the text and images.",
    },
    {
      id: 6,
      image: "/images/givingtree.png",
      title: "Giving Tree",
      link: "https://elastic-nightingale-265b77.netlify.app/",
      githubLink:
        "https://github.com/madeleinecmarie/Interaction_Design_CA_Madeleine_Olofsson",
      description:
        "This small project is the Interaction Design course I did in the first year at Noroff. Learned a lot about UI and UX design.",
    },
    {
      id: 7,
      image: "/images/pokemon.png",
      title: "Pokemon",
      link: "https://cranky-benz-dc8db0.netlify.app/",
      githubLink:
        "https://github.com/madeleinecmarie/Madeleine-Olofsson-js1-ca",
      description:
        "Pokemon is a small project where I learned how to use REST API's, and this is the result. ",
    },
  ];

  return (
    <div>
      {projectsCard.map(
        ({ image, title, description, id, link, githubLink }) => (
          <div key={id} className="cards">
            <div>
              <Image
                src={image}
                alt={title}
                width={1012}
                height={477}
                className="cards__img"
              />
            </div>
            <div className="cards__flex">
              <Link href={link} passHref>
                <a>
                  <h3 className="cards__heading">{title}</h3>
                </a>
              </Link>
              <a href={githubLink} className="cards__githublink">
                Github
              </a>
            </div>
            <p className="cards__bodytext">{description}</p>
          </div>
        )
      )}
    </div>
  );
};

export default Projects;
