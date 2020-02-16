import { Text as nbText } from "native-base";
import styled from "styled-components";
import is from "styled-is";

const Text = styled(nbText)`
  font-family: Roboto;
  color: ${({ theme, color }) => color || theme.ink};

  ${is("heading")`
    font-size: ${({ theme }) => theme.displayXLarge}px
    font-weight: 400
  `};

  ${is("listItem")`
    font-size: ${({ theme }) => theme.displayMedium}px
    color: ${({ theme, color }) => color || theme.ink};
  `};

  ${is("header")`
    font-size: ${({ theme }) => theme.heading}px
    color: ${({ theme, color }) => color || theme.ink};
    font-weight: ${({ weight }) => weight || 400}
  `}

  ${is("body")`
    font-size: ${({ theme }) => theme.body}px
    font-weight: bold;
  `};

  ${is("caption")`
    font-size: ${({ theme }) => theme.caption}px
    font-weight: 300;
  `};

  ${is("value")`
    font-size: ${({ theme }) => theme.body}px
    font-weight: bold;
    marginLeft: 20px
  `};
`;

export default Text;
