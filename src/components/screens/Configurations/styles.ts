import styled from "styled-components/native";

const ConfigurationItemContainer = styled.View`
  border-radius: ${(props) => props.theme.border.radius};
  background-color: ${(props) => props.theme.colors.lightGray}35;
  padding: 0 16px;
  margin-bottom: 16px;
`;

export { ConfigurationItemContainer };
