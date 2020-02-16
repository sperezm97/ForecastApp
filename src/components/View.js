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

  ${is("InputContainer")`
    margin: 10px 10px
  `}

  ${match("header", "container")`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    margin-top: 28px;
    background-color: ${({ theme }) => theme.primaryColor};
  `}

  ${match("header", "body")`
    justify-content: center;
    align-items: center;
  `}

  ${match("header", "left")`
    justify-content: flex-start;
    align-items: center;
  `}

  ${match("header", "container")`
    justify-content: flex-end;
    align-items: center;
  `}

  ${is("logo")`
    padding-left: 10px
  `}

  ${match("card", "container")`
    flex: 1
    flex-direction: column;
    backgroundColor: ${({ theme }) => theme.white};
    margin: 20px 0 0 0;
    border-radius: 20px;
    padding: ${({ theme }) => theme.medium}px;
  `}

  ${match("container", "button")`
    margin: 20px 10px 0 0;
  `}

  ${match("container", "card")`
    margin: 20px 0 0 0;
  `}

  ${match("container", "title")`
    flex: 1;
    flex-direction: row
    justify-content: space-between;
    margin: 10px 0 ;
  `}

  ${match("container", "item")`
    flex-direction: column
    justify-content: space-between;
    margin: 5px 10px ;
  `}

  ${match("container", "column")`
    flex-direction: column;
    justify-content: space-around;
  `}
  
  ${match("container", "row")`
    flex-direction: row;
    justify-content: space-between;
  `}



`;

export default View;
