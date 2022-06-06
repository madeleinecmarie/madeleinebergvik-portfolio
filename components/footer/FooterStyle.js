import styled from "styled-components";
import media from "styled-media-query";

const FooterStyle = styled.div`
  background-color: var(--blue);
  height: 280px;

  ${media.lessThan("490px")`
  height: 430px;
  `}
`;

export default FooterStyle;
