import { Pressable, Image, type ImageStyle, type StyleProp } from "react-native";
import { SlideContainer } from "./styles";

type SlideProps = {
  imageStyle?: StyleProp<ImageStyle>;
  imageURI: string;
  height: number;
  width: number;
  onPress?: () => void;
};

const Slide = (props: SlideProps): React.ReactElement<SlideProps> => {
  return (
    <Pressable onPress={props.onPress}>
      <SlideContainer>
        <Image
          style={[{ width: props.width, height: props.height }, props.imageStyle]}
          source={{ uri: props.imageURI }}
          resizeMethod="resize"
        />
      </SlideContainer>
    </Pressable>
  );
};

export { Slide, SlideProps };
