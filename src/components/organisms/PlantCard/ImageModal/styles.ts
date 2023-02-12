import styled from "styled-components/native";
import { type ViewProps } from "react-native";

type ImageContainerProps = { width: number; height: number };

export const ImageContainer: React.FC<
  ViewProps & ImageContainerProps
> = styled.View<ImageContainerProps>`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  border-radius: ${(props) => props.theme.border.radius};
  overflow: hidden;
`;
