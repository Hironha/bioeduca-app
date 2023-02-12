import { Modal as NativeModal, type ModalProps as NativeModalProps } from "react-native";

import { Overlay } from "./styles";

type ModalProps = Omit<NativeModalProps, "children" | "transparent" | "presentationStyle"> & {
  opacity?: number;
  children: React.ReactNode;
  destroyOnClose?: boolean;
};

const Modal = (props: ModalProps): React.ReactElement<ModalProps> => {
  const { children, opacity = 0.7, destroyOnClose, ...modalProps } = props;

  const showChildren = destroyOnClose ? props.visible : true;

  return (
    <NativeModal transparent presentationStyle="overFullScreen" {...modalProps}>
      <Overlay alpha={opacity}>{showChildren ? props.children : null}</Overlay>
    </NativeModal>
  );
};

export { Modal, type ModalProps };
