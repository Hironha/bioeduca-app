import { useLayoutEffect, useState } from "react";
import { Image, Dimensions, TouchableOpacity, type StyleProp, type ViewStyle } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Animated from "react-native-reanimated";
import { GestureDetector, GestureHandlerRootView } from "react-native-gesture-handler";

import { Modal, type ModalProps } from "@organisms/Modal";
import { useZoomAnimation } from "./hooks/useZoomAnimation";
import { ImageContainer, ActionsContainer, Container, ContentContainer } from "./styles";

type ImageModalProps = Pick<ModalProps, "visible"> & {
  onClose: () => void;
  imageURI?: string;
};

type ZoomableImageProps = {
  imageURI: string;
  style?: StyleProp<ViewStyle>;
  onClosePinch(): void;
};

const screenSize = Dimensions.get("screen");

const AnimatedImage = Animated.createAnimatedComponent(Image);

const ZoomableImage = (props: ZoomableImageProps): React.ReactElement<ZoomableImageProps> => {
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const zoomAnimation = useZoomAnimation({
    height: imageSize.height,
    width: imageSize.width,
  });

  useLayoutEffect((): (() => void) => {
    let canceled = false;
    const handleGetSizeSuccess = (width: number, height: number) => {
      const imageWidth = Math.floor(screenSize.width * 0.9);
      const imageHeight = (height / width) * imageWidth;
      if (!canceled) {
        setImageSize({ width: imageWidth, height: imageHeight });
      }
    };

    Image.getSize(props.imageURI, handleGetSizeSuccess);

    return () => {
      canceled = true;
    };
  }, [props.imageURI, screenSize.width, screenSize.height]);

  return (
    <GestureDetector gesture={zoomAnimation.gesture}>
      <ImageContainer style={props.style} width={imageSize.width} height={imageSize.height}>
        <AnimatedImage
          style={[{ flex: 1 }, zoomAnimation.animation]}
          source={{
            uri: props.imageURI,
            width: imageSize.width,
            height: imageSize.height,
          }}
          resizeMode="contain"
        />
      </ImageContainer>
    </GestureDetector>
  );
};

export const ImageModal = (props: ImageModalProps): React.ReactElement<ImageModalProps> => {
  return (
    <Modal
      destroyOnClose
      animationType="fade"
      visible={props.visible}
      onRequestClose={props.onClose}
    >
      <Container>
        <ActionsContainer>
          <TouchableOpacity onPress={props.onClose}>
            <AntDesign name="close" size={26} color="white" />
          </TouchableOpacity>
        </ActionsContainer>

        <ContentContainer>
          {props.imageURI ? (
            <GestureHandlerRootView>
              <ZoomableImage
                style={{ marginBottom: 24 }}
                imageURI={props.imageURI}
                onClosePinch={props.onClose}
              />
            </GestureHandlerRootView>
          ) : null}
        </ContentContainer>
      </Container>
    </Modal>
  );
};
