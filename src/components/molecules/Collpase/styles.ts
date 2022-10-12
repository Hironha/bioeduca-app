import styled from "styled-components/native";
import Animated from "react-native-reanimated";
import { Typography } from "@atoms/Typography";

const CollpaseContainer = styled(Animated.View)`
  padding: 4px;
`;

const CollapseTitleContainer = styled.Pressable`
  flex-direction: row;
  align-self: stretch;
`;

const CollpaseLabel = styled(Typography)`
  flex: 1;
  margin-right: 12px;
`;

export { CollpaseLabel, CollpaseContainer, CollapseTitleContainer };
