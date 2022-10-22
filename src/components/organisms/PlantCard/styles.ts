import styled from "styled-components/native";

const PlantCardContainer = styled.View`
  margin-bottom: 12px;
`;

const InformationCollapseContainer = styled.View`
  padding: 4px 8px;
  background-color: ${(props) => `${props.theme.colors.lightGray}10`};
  border-left-color: ${(props) => props.theme.colors.primary};
  border-left-width: 4px;
  border-radius: ${(props) => props.theme.border.radius};
`;

const InformationsListSeparator = styled.View`
  padding: 8px 0;
`;

export { PlantCardContainer, InformationCollapseContainer, InformationsListSeparator };
