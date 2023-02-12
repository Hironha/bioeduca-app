import {
  Modal as NativeModal,
  TouchableWithoutFeedback,
  type ModalProps as NativeModalProps,
} from "react-native";

import { Overlay } from "./styles";

type ModalProps = Omit<NativeModalProps, "children" | "transparent"> & {
  children: React.ReactNode;
};

const Modal = (props: ModalProps): React.ReactElement<ModalProps> => {
  const { children, ...modalProps } = props;

  return (
    <NativeModal transparent {...modalProps}>
      <Overlay>{children}</Overlay>
    </NativeModal>
  );
};

export { Modal, type ModalProps };
