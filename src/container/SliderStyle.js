import styled from "styled-components";

export const Button = styled.button`
  padding: 15px 20px;
  background-color: #D400FF;
  color: black;
  cursor: pointer;
  outline: none;
  border: none;
  margin: 5px;
`;
export const Flex = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${props => (props.background ? "#1e1e1e" : "")};
`;

