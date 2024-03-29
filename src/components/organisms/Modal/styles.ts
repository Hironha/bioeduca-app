import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width } = Dimensions.get("screen");

export const Overlay = styled.View<{ alpha: number }>`
  flex: 1;
  z-index: 1;
  width: ${width}px;
  background-color: rgba(0, 0, 0, ${(props) => props.alpha});

  justify-content: center;
  align-items: center;
`;
