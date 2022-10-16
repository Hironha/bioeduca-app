import styled from "styled-components/native";

export const ScreenLayoutContainer = styled.SafeAreaView`
  flex: 1;
  padding: 0 12px;
  background-color: ${(props) => props.theme.colors.background};
`;

export const ContentContainer = styled.View`
  margin: 8px 0;
`;
