import Link from "next/link";

// Components
import FooterStyle from "./FooterStyle";

function Footer() {
  return (
    <>
      <FooterStyle>
        <div className="footer-inner">
          <div className="footer-inner__wrap-1">
            <h3 className="footer-inner__headline">Social Media</h3>
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
                <Link href="https://github.com/madeleinecmarie" passHref>
                  <a>Github</a>
                </Link>
              </li>
              <p className="footer-inner__copyright">MB © 2022</p>
            </ul>
          </div>
          <div className="footer-inner__wrap-2">
            <h3 className="footer-inner__headline">Contact</h3>
            <ul className="footer-inner__ul">
              <li>
                <Link href="" passHref>
                  <a>+47 463 17 018</a>
                </Link>
              </li>
              <li>
                <Link href="mailto: madeleinebergvik@gmail.com" passHref>
                  <a>Gmail</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </FooterStyle>
    </>
  );
}

export default Footer;
