import { useMemo } from "react";
import { PaginationButton, PaginationList } from "./styles";
import { type ViewStyle, type StyleProp } from "react-native";

type PaginationProps = {
  style?: StyleProp<ViewStyle>;
  pages: number;
  /** page starts from 0 */
  currentPage: number;
};

const Pagination = (props: PaginationProps) => {
  const paginationButtons: number[] = useMemo(
    () => new Array(props.pages).fill(0).map((_, index) => index),
    [props.pages]
  );

  return (
    <PaginationList
      gap={8}
      horizontal
      style={props.style}
      dataSource={paginationButtons}
      getKey={(page) => (page as number).toString()}
      renderItem={(page) => <PaginationButton active={page === props.currentPage} />}
    />
  );
};

export { Pagination };
