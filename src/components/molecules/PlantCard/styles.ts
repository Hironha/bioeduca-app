import styled from "styled-components/native";

const PlantCardContainer = styled.View`
  margin-bottom: 12px;
`;

const PlantHeaderContainer = styled.View``;

const InformationCollapseContainer = styled.View`
  padding: 4px 8px;
  border-left-color: ${(props) => props.theme.colors.primary};
  border-left-width: 4px;
  border-radius: ${(props) => props.theme.border.radius};
`;

export { PlantHeaderContainer, PlantCardContainer, InformationCollapseContainer };
