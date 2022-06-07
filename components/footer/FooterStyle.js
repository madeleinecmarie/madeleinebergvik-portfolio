import styled from "styled-components";
import media from "styled-media-query";

const FooterStyle = styled.div`
  background-color: var(--black);
  color: var(--white);
  height: 340px;

  ${media.lessThan("650px")`
  height: auto;
  padding: 30px;
  `}
`;

export default FooterStyle;
