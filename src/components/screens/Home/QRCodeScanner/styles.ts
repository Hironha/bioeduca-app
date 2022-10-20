import styled from "styled-components/native";
import { Pressable } from "react-native";
import { Camera as ExpoCamera } from "expo-camera";

const CameraContainer = styled.View`
  flex: 1;
  border-radius: ${(props) => props.theme.border.radius};
  overflow: hidden;
`;

const Camera = styled(ExpoCamera)`
  flex: 1;
  position: relative;
`;

const CloseButton = styled(Pressable)`
  position: absolute;
  top: 10px;
  left: 10px;
`;

const OptionItem = styled(Pressable)`
  border-radius: 20px;
  width: 36px;
  height: 36px;
  padding: 2px;
  background-color: ${(props) => props.theme.colors.primary};

  justify-content: center;
  align-items: center;
`;

const TipContainer = styled.View`
  position: absolute;
  width: 100%;
  background-color: #00000054;
  bottom: 0px;
  padding: 16px;
`;

export { CameraContainer, Camera, CloseButton, OptionItem, TipContainer };
