import styled from "styled-components";
import { Button as nbButton } from "native-base";

const Button = styled(nbButton)`
  background-color: ${({ theme, color }) => color || theme.primaryColorLight};
`;

export default Button;
