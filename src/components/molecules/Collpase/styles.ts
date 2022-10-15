import styled from "styled-components/native";
import Animated from "react-native-reanimated";

const CollpaseContainer = styled(Animated.View)`
  padding: 4px;
`;

const CollapseTitleContainer = styled.Pressable`
  flex-direction: row;
  align-self: stretch;
  align-items: center;
`;

const CollpaseLabelContainer = styled.View`
  flex: 1;
  margin-right: 12px;
`;

export { CollpaseLabelContainer, CollpaseContainer, CollapseTitleContainer };
