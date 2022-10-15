import { type ImageStyle, type StyleProp } from "react-native";
import { SlideContainer, SlideImage } from "./styles";

type SlideProps = {
  imageStyle?: StyleProp<ImageStyle>;
  imageURI: string;
  height: number;
  width: number;
};

const Slide = (props: SlideProps) => {
  return (
    <SlideContainer style={{ width: props.width, height: props.height }}>
      <SlideImage
        style={[{ width: props.width, height: props.height }, props.imageStyle]}
        source={{ uri: props.imageURI }}
      />
    </SlideContainer>
  );
};

export { Slide, SlideProps };
