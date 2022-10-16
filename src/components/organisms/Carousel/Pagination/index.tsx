import { useMemo } from "react";
import { PaginationButton, PaginationList } from "./styles";

type PaginationProps = {
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
      dataSource={paginationButtons}
      getKey={(page) => (page as number).toString()}
      renderItem={(page) => <PaginationButton active={page === props.currentPage} />}
    />
  );
};

export { Pagination };
