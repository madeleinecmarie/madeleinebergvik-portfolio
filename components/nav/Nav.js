import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/images/logo.png";
import NavStyle from "../nav/NavStyle";

export const Nav = () => {
  const router = useRouter();

  return (
    <>
      <NavStyle className="active flex items-center flex-wrap">
        <div className="logo-container">
          <Link href="/" passHref>
            <a>
              <Image
                src={Logo}
                width={85}
                height={35}
                alt="MB logo"
                className="logo"
              ></Image>
            </a>
          </Link>
        </div>

        <div className="nav--links">
          <Link href="/projects">
            <a
              className={
                router.pathname === "/projects" ? "activeNav" : "inactive"
              }
            >
              Projects
            </a>
          </Link>
          <Link href="/about">
            <a
              className={
                router.pathname === "/about" ? "activeNav" : "inactive"
              }
            >
              About
            </a>
          </Link>
        </div>
      </NavStyle>
    </>
  );
};
