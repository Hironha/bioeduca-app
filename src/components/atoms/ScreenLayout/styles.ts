import styled from "styled-components/native";

export const ScreenLayoutContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
`;

export const ContentContainer = styled.View`
  flex: 1;
  margin: 0 12px;
`;
