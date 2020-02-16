import styled from "styled-components";
import { Container as nbContainer } from "native-base";

const Container = styled(nbContainer)`
  background-color: ${({ theme }) => theme.white};
`;

export default Container;
