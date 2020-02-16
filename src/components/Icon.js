import styled from "styled-components";
import is, { match } from "styled-is";
import { Icon as nbIcon } from "native-base";

const Icon = styled(nbIcon)`
  ${is("header")`
    font-size: ${({ theme }) => theme.displayXLarge}px
    color: ${({ theme }) => theme.ink};
  `}

  ${is("list")`
    font-size: ${({ theme }) => theme.displayXLarge}px
    width: 35px;
    color: ${({ theme, color }) => color || theme.primaryColorDark};
  `}
`;

export default Icon;
