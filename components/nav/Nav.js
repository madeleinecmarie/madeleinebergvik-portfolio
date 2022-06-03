import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/images/logo.png";
import NavStyle from "../nav/NavStyle";

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
              height={35}
              alt="MB logo"
              className="logo"
            ></Image>
          </div>
        </a>
      </Link>
      <button
        className="inline-flex p-3 rounded lg:hidden ml-auto outline-none"
        onClick={handleClick}
      >
        <svg
          className="w-6 h-6"
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
        <div className="nav__links lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
          <Link href="/projects">
            <a className="lg:inline-flex lg:w-auto w-auto px-3 py-2 rounded items-center justify-center">
              Projects
            </a>
          </Link>
          <Link href="/about">
            <a className="lg:inline-flex lg:w-auto w-auto px-3 py-2 rounded items-center justify-center">
              About
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

//   return (
//     <>
//       <NavStyle className="active flex items-center flex-wrap">
//         <div className="logo-container">
//           <Link href="/" passHref>
//             <a>
//               <Image
//                 src={Logo}
//                 width={90}
//                 height={35}
//                 alt="MB logo"
//                 className="logo"
//               ></Image>
//             </a>
//           </Link>
//         </div>

//         <div className="nav--links">
//           <Link href="/projects">
//             <a
//               className={
//                 router.pathname === "/projects" ? "activeNav" : "inactive"
//               }
//             >
//               Projects
//             </a>
//           </Link>
//           <Link href="/about">
//             <a
//               className={
//                 router.pathname === "/about" ? "activeNav" : "inactive"
//               }
//             >
//               About
//             </a>
//           </Link>
//         </div>
//       </NavStyle>
//     </>
//   );
// };
