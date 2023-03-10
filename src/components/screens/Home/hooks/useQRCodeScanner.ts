import { useCallback, useState } from "react";
import { Camera } from "expo-camera";

type QRCodeScanner = {
  isScanning: boolean;
  scan(): void;
  stop(): void;
};

const useQRCodeScanner = (): QRCodeScanner => {
  const [isScanning, setIsScanning] = useState<boolean>(false);

  const scanQRCode = useCallback(async () => {
    const { status } = await Camera.getCameraPermissionsAsync();
    if (status === "granted") {
      setIsScanning(true);
    } else {
      const { status } = await Camera.requestCameraPermissionsAsync();
      if (status === "granted") {
        setIsScanning(true);
      }
    }
  }, []);

  const stopScanning = useCallback(() => setIsScanning(false), []);

  return {
    isScanning,
    scan: scanQRCode,
    stop: stopScanning,
  };
};

export { useQRCodeScanner };
