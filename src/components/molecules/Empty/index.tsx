import { Typography } from "@atoms/Typography";
import { EmptyContainer } from "./styles";

type EmptyProps = {
  text: string;
};

const Empty = (props: EmptyProps) => {
  return (
    <EmptyContainer>
      <Typography color="lightGray" size="extraLarge">
        {props.text}
      </Typography>
    </EmptyContainer>
  );
};

export { Empty, EmptyProps };
