import styled from "styled-components/native";
import Animated from "react-native-reanimated";

const PlantCardContainer = styled(Animated.View)`
  margin: 0 12px;
  border: 1px ${(props) => props.theme.colors.primary} solid;
  background-color: ${(props) => `${props.theme.colors.lightGray}18`};
  border-radius: ${(props) => props.theme.border.radius};
`;

const PressableContainer = styled.Pressable`
  flex-direction: row;
  justify-content: center;
  align-items: stretch;

  padding: 8px;
`;

const InformationContainer = styled.View`
  margin-left: 16px;
  justify-content: center;
  padding: 6px;
  flex: 1;
`;

const PlantImage = styled.Image`
  align-self: center;
  border-radius: ${(props) => props.theme.border.radius};
  width: 70px;
  height: 70px;
  object-fit: contain;
`;

export { PlantCardContainer, InformationContainer, PlantImage, PressableContainer };
