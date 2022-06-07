import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/images/logo.png";

export const Nav = () => {
  const router = useRouter();

  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="nav flex items-center flex-wrap p-6 ">
      <Link href="/" passHref>
        <a className="inline-flex items-center">
          <div className="logo-container">
            <Image
              src={Logo}
              width={90}
              height={30}
              alt="MB logo"
              className="logo"
            ></Image>
          </div>
        </a>
      </Link>
      <button
        className="inline-flex rounded lg:hidden ml-auto outline-none"
        onClick={handleClick}
      >
        <svg
          className="nav__hamburger w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <div
        className={`${
          active ? "" : "hidden"
        }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
      >
        <div className="nav__links lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
          <Link href="#projects" scroll={false}>
            <a className={router.pathname === "#projects"}>Projects</a>
          </Link>
          <Link href="#info" scroll={false}>
            <a className={router.pathname === "#info"}>Info</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};
