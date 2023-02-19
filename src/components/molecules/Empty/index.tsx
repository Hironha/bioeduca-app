import { View } from "react-native";
import LottieView from "lottie-react-native";

import { Typography } from "@atoms/Typography";
import { EmptyContainer } from "./styles";

type EmptyProps = {
  text: string;
};

const Empty = (props: EmptyProps) => {
  const animationDuration = 2500;

  return (
    <EmptyContainer>
      <View>
        <LottieView
          autoPlay
          duration={animationDuration}
          resizeMode="contain"
          style={{ width: 120, height: 120 }}
          source={require("@assets/lotties/empty-lottie.json")}
        />
      </View>
      <Typography style={{ textAlign: "center" }} color="primary" size="large">
        {props.text}
      </Typography>
    </EmptyContainer>
  );
};

export { Empty, EmptyProps };
