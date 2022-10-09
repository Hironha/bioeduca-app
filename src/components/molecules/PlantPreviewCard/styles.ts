import styled from "styled-components/native";
import Animated from "react-native-reanimated";

const PlantCardContainer = styled(Animated.View)`
  margin: 0 24px;
  background-color: ${(props) => props.theme.colors.lightGray};
  border-style: solid;
  border-left-color: ${(props) => props.theme.colors.primary};
  border-left-width: 5px;
  border-radius: ${(props) => props.theme.border.radius};
  box-shadow: 5px 10px black;
`;

const PressableContainer = styled.Pressable`
  flex-direction: row;
  justify-content: center;
  align-items: stretch;

  padding: 6px 12px;
`;

const InformationContainer = styled.View`
  margin-left: 24px;
  justify-content: center;

  padding: 6px;
  flex: 1;
`;

const PlantImage = styled.Image`
  align-self: center;
  margin-left: 8px;
  border-radius: ${(props) => props.theme.border.radius};
  width: 50px;
  height: 50px;
  object-fit: contain;
`;

export { PlantCardContainer, InformationContainer, PlantImage, PressableContainer };