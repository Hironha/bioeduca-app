import { Image, type ImageStyle, type StyleProp } from "react-native";
import { SlideContainer } from "./styles";

type SlideProps = {
  imageStyle?: StyleProp<ImageStyle>;
  imageURI: string;
  height: number;
  width: number;
};

const Slide = (props: SlideProps) => {
  return (
    <SlideContainer>
      <Image
        style={[{ width: props.width, height: props.height }, props.imageStyle]}
        source={{ uri: props.imageURI }}
        resizeMethod="resize"
      />
    </SlideContainer>
  );
};

export { Slide, SlideProps };
