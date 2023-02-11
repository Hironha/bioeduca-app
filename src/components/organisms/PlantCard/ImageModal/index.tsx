import { Image, Dimensions } from "react-native";

import { Modal, type ModalProps } from "@organisms/Modal";
import { useLayoutEffect, useState } from "react";

type ImageModalProps = Pick<ModalProps, "visible" | "onRequestClose"> & {
  imageURI?: string;
};

const screenSize = Dimensions.get("screen");

export const ImageModal = (props: ImageModalProps): React.ReactElement<ImageModalProps> => {
  const { imageURI, ...modalProps } = props;
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

  useLayoutEffect((): (() => void) => {
    let canceled = false;
    const handleGetSizeSuccess = (width: number, height: number) => {
      const imageWidth = Math.floor(screenSize.width * 0.9);
      const imageHeight = (height / width) * imageWidth;
      if (!canceled) {
        setImageSize({ width: imageWidth, height: imageHeight });
      }
    };

    if (imageURI) {
      Image.getSize(imageURI, handleGetSizeSuccess);
    }

    return () => {
      canceled = true;
    };
  }, [imageURI, screenSize.width, screenSize.height]);

  return (
    <Modal animationType="fade" {...modalProps}>
      {imageURI ? (
        <Image
          style={{ borderRadius: 6 }}
          source={{ uri: imageURI, width: imageSize.width, height: imageSize.height }}
          resizeMode="contain"
        />
      ) : null}
    </Modal>
  );
};
