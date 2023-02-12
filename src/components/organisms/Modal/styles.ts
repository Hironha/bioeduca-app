import styled from "styled-components/native";

export const Overlay = styled.View<{ alpha: number }>`
  flex: 1;
  z-index: 1;
  width: 100%;
  background-color: rgba(0, 0, 0, ${props => props.alpha});

  justify-content: center;
  align-items: center;
`;
