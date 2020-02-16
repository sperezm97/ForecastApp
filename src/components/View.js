import styled from "styled-components";
import is, { match } from "styled-is";
import { View as nbView } from "react-native";

const View = styled(nbView)`
  ${is("flex")`
    flex: 1;
  `}
  ${is("row")`
    flex-direction: row;
  `}
  ${is("column")`
    flex-direction: column;
  `}
  ${is("center")`
    justify-content: center;
    align-items: center;
  `}

`;

export default View;
