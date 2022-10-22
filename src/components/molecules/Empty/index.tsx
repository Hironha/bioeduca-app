import LottieView from "lottie-react-native";

import { Typography } from "@atoms/Typography";
import { EmptyContainer } from "./styles";

type EmptyProps = {
  text: string;
};

const Empty = (props: EmptyProps) => {
  return (
    <EmptyContainer>
      <LottieView
        resizeMode="contain"
        style={{ width: 120, height: 120 }}
        source={require("@assets/empty-lottie.json")}
      />
      <Typography style={{ textAlign: "center" }} color="primary" size="large">
        {props.text}
      </Typography>
    </EmptyContainer>
  );
};

export { Empty, EmptyProps };
