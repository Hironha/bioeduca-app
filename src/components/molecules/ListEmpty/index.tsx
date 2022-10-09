import { Typography } from "@atoms/Typography";
import { ListEmptyContainer } from "./styles";

type ListEmptyProps = {
  text: string;
};

export const ListEmpty = (props: ListEmptyProps) => {
  return (
    <ListEmptyContainer>
      <Typography color="lightGray" size="extraLarge">
        {props.text}
      </Typography>
    </ListEmptyContainer>
  );
};
