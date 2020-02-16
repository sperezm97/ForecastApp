import styled from "styled-components";
import { Content as nbContent } from "native-base";

const Content = styled(nbContent)`
  background-color: ${({ theme }) => theme.primaryColor};
  padding: 10px 16px;
`;

export default Content;
