import { List } from "@molecules/List";
import styled from "styled-components/native";
import { pxToNumber } from "@utils/convertions";

const PaginationButton = styled.Pressable<{ active?: boolean }>`
  width: ${(props) => props.theme.fontSize.medium};
  height: ${(props) => props.theme.fontSize.medium};
  border-radius: ${(props) => pxToNumber(props.theme.fontSize.medium) / 2}px;
  background-color: ${(props) => props.theme.colors.primary};
  opacity: ${(props) => (props.active ? 1 : 0.4)};
`;

const PaginationList = styled(List)`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export { PaginationButton, PaginationList };
