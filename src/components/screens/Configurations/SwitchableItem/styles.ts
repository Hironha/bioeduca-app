import { Typography } from "@atoms/Typography";
import { Switch } from "@atoms/Switch";
import styled from "styled-components/native";

const SwitchContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 12px 0;
`;

const SwitchLabel = styled(Typography)`
  margin-right: 12px;
`;

const SwitchToggle = styled(Switch)`
  margin-left: auto;
`;

export { SwitchContainer, SwitchLabel, SwitchToggle };
