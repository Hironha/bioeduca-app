import { useMemo } from "react";
import { Ionicons } from "@expo/vector-icons";

import { List } from "@molecules/List";
import { Typography } from "@atoms/Typography";
import { CameraContainer, Camera, CloseButton, OptionItem, TipContainer } from "./styles";

import { useCameraType } from "./hooks/useCameraType";
import { useFlash } from "./hooks/useFlash";
import { type CameraProps } from "expo-camera";

type CameraOption = {
  key: string;
  icon: JSX.Element;
  onPress: () => void;
};

type QRCodeScannerProps = Omit<CameraProps, "ratio" | "type"> & {
  onCancel: () => void;
};

const QRCodeScanner = (props: QRCodeScannerProps) => {
  const { style, onCancel, ...cameraProps } = props;
  const { cameraType, switchCamera } = useCameraType();
  const { flashMode, switchFlash, isFlashOn } = useFlash();

  const cameraOptions = useMemo(
    (): CameraOption[] => [
      {
        key: "flash-icon",
        icon: <Ionicons name={isFlashOn ? "flash-off" : "flash-sharp"} size={24} color="white" />,
        onPress: switchFlash,
      },
      {
        key: "reverse-camera-icon",
        icon: <Ionicons name="camera-reverse" size={24} color="white" />,
        onPress: switchCamera,
      },
    ],
    [switchFlash, switchCamera]
  );

  return (
    <CameraContainer style={style}>
      <Camera {...cameraProps} ratio="16:9" type={cameraType} flashMode={flashMode}>
        <CloseButton onPress={onCancel}>
          <Ionicons name="close" size={24} color="white" />
        </CloseButton>

        <List
          style={{ position: "absolute", top: 10, right: 10 }}
          gap={12}
          dataSource={cameraOptions}
          getKey={(item) => item.key}
          renderItem={(item) => <OptionItem onPress={item.onPress}>{item.icon}</OptionItem>}
        />

        <TipContainer>
          <Typography color="white" style={{ textAlign: "center" }}>
            Aponte a câmera para o código QR
          </Typography>
        </TipContainer>
      </Camera>
    </CameraContainer>
  );
};

export { QRCodeScanner, QRCodeScannerProps };
