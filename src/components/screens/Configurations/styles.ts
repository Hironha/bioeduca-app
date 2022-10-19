import { Typography } from "@atoms/Typography";
import { Switch } from "react-native";
import styled from "styled-components/native";

const SwitchContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const SwitchLabel = styled(Typography)`
  margin-right: 12px;
`;

const SwitchToggle = styled(Switch)`
  margin-left: auto;
`;

export { SwitchContainer, SwitchLabel, SwitchToggle };