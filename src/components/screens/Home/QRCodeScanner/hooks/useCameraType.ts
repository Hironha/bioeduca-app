import { useCallback, useState } from "react";
import { CameraType } from "expo-camera";

type UseCameraTypeProps = {
  initialType?: CameraType;
};

const useCameraType = (props?: UseCameraTypeProps) => {
  const [cameraType, setCameraType] = useState<CameraType>(props?.initialType ?? CameraType.back);

  const switchCamera = useCallback(() => {
    setCameraType((prevState) =>
      prevState === CameraType.front ? CameraType.back : CameraType.front
    );
  }, []);

  return { cameraType, switchCamera };
};

export { useCameraType, UseCameraTypeProps };
