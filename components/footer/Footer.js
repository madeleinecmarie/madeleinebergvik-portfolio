import Image from "next/image";
import Link from "next/link";
import FooterImage from "../../public/images/footer.png";

// Components
import FooterStyle from "./FooterStyle";

function Footer() {
  return (
    <>
      <FooterStyle>
        <div className="footer-inner">
          <div className="footer-inner__wrap-1">
            <h3>Contact</h3>
            <ul className="footer-inner__ul">
              <li>
                <Link
                  href="https://www.linkedin.com/in/madeleine-bergvik-276b6b20a/"
                  passHref
                >
                  <a>LinkedIn</a>
                </Link>
              </li>
              <li>
                <Link href="mailto: madeleinebergvik@gmail.com" passHref>
                  <a>Gmail</a>
                </Link>
              </li>
              <li>
                <Link href="https://github.com/madeleinecmarie" passHref>
                  <a>Github</a>
                </Link>
              </li>
              <p className="copyright__smallScreen">MB © 2022</p>
            </ul>
          </div>
          <div>
            <Image
              src={FooterImage}
              height={190}
              width={500}
              alt="Illustration of a laptop and books"
            ></Image>
          </div>
        </div>
      </FooterStyle>
    </>
  );
}

export default Footer;
