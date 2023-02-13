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

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ActionsContainer = styled.View`
  padding: 12px;
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
`;

export const ContentContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-bottom: 26px;
`;
