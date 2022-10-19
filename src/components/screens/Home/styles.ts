import styled from "styled-components/native";

const QRCodeButton = styled.Pressable`
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
  margin-top: auto;
  align-self: center;
  padding: 6px 12px;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.border.radius};
`;

export { QRCodeButton };
