import { Modal as NativeModal, type ModalProps as NativeModalProps } from "react-native";

import { Overlay } from "./styles";

type ModalProps = Omit<NativeModalProps, "children" | "transparent" | "presentationStyle"> & {
  children: React.ReactNode;
  destroyOnClose?: boolean;
};

const Modal = (props: ModalProps): React.ReactElement<ModalProps> => {
  const { children, ...modalProps } = props;

  const showChildren = props.destroyOnClose ? props.visible : true;

  return (
    <NativeModal transparent presentationStyle="overFullScreen" {...modalProps}>
      <Overlay>{showChildren ? props.children : null}</Overlay>
    </NativeModal>
  );
};

export { Modal, type ModalProps };
