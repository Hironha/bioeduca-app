import styled from "styled-components/native";

const LottieContainer = styled.View`
  flex: 1;
  margin-bottom: 15px;
`;

const ValidatingPlantIdContainer = styled.View`
  position: absolute;
  z-index: 1000;
  background-color: #00000054;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export { LottieContainer, ValidatingPlantIdContainer };
