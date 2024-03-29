import styled from "styled-components/native";
import Animated from "react-native-reanimated";

const PlantCardContainer = styled(Animated.View)`
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
  margin-left: 12px;
  justify-content: flex-start;
  padding: 6px;
  flex: 1;
`;

const PlantImage = styled.Image`
  align-self: center;
  border-radius: ${(props) => props.theme.border.radius};
  width: 60px;
  height: 60px;
  border-radius: 30px;
  object-fit: cover;
`;

export { PlantCardContainer, InformationContainer, PlantImage, PressableContainer };
