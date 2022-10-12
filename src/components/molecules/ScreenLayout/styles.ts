import styled from "styled-components/native";

export const ScreenLayoutContainer = styled.SafeAreaView`
  flex: 1;
  padding: 12px;
  background-color: ${(props) => props.theme.colors.background};
`;
