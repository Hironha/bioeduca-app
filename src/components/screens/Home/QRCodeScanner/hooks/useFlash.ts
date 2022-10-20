import { useCallback, useState } from "react";
import { FlashMode } from "expo-camera";

type UseFlashProps = {
  initialMode?: FlashMode;
};

const useFlash = (props?: UseFlashProps) => {
  const [flashMode, setFlashMode] = useState<FlashMode>(props?.initialMode || FlashMode.off);

  const turnOn = useCallback(() => {
    setFlashMode(FlashMode.torch);
  }, []);

  const isFlashOn = flashMode === FlashMode.torch;

  const turnOff = useCallback(() => {
    setFlashMode(FlashMode.off);
  }, []);

  const switchFlash = useCallback(() => {
    setFlashMode((mode) => (mode === FlashMode.torch ? FlashMode.off : FlashMode.torch));
  }, []);

  return { flashMode, turnOn, turnOff, switchFlash, isFlashOn };
};

export { useFlash, UseFlashProps };
