import { useCallback, useState } from "react";
import { Camera } from 'expo-camera';

const useQRCodeScanner = () => {
  const [isScanning, setIsScanning] = useState<boolean>(false);

  const scanQRCode = useCallback(async () => {
    const { status } = await Camera.getCameraPermissionsAsync();
    if (status === "granted") {
      setIsScanning(true);
    }
  }, []);

  const stopScanning = useCallback(() => setIsScanning(false), []);

  return {
    isScanning,
    scanQRCode,
    stopScanning,
  };
};

export { useQRCodeScanner };
