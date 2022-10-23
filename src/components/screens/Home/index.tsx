import { useCallback, useRef, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { View } from "react-native";
import LottieView from "lottie-react-native";

import { Typography } from "@atoms/Typography";
import { ScreenLayout } from "@atoms/ScreenLayout";
import { Button } from "@molecules/Button";
import { QRCodeScanner } from "./QRCodeScanner";

import { useQRCodeScanner } from "./hooks/useQRCodeScanner";

import { type BarCodeScanningResult } from "expo-camera";
import { type HomeStackParamsList } from "@navigations/HomeStack";
import { type PlantsStackParamsList } from "@navigations/PlantsStack";
import { type BottomTabsParamsList } from "@navigations/BottomNavigation";
import { type NativeStackScreenProps } from "@react-navigation/native-stack";

type HomeScreenProps = NativeStackScreenProps<
  HomeStackParamsList & BottomTabsParamsList & PlantsStackParamsList,
  "HomeScreen"
>;

const HomeScreen = ({ route, navigation }: HomeScreenProps) => {
  const { isScanning, scanQRCode, stopScanning } = useQRCodeScanner();
  const growingPlantRef = useRef<LottieView | null>(null);
  const isPlayingAnimation = useRef(false);

  const handleBarCodeScanned = useCallback((result: BarCodeScanningResult) => {
    navigation.navigate("PlantsTab", {
      screen: "ConsultPlantScreen",
      params: { plantId: result.data, plantPopularName: "Teste" },
      initial: false,
    });
  }, []);

  useFocusEffect(useCallback(() => stopScanning, [stopScanning]));

  useFocusEffect(
    useCallback(() => {
      isPlayingAnimation.current = true;
      growingPlantRef.current?.play();
    }, [])
  );

  useEffect(() => {
    if (!isScanning && !isPlayingAnimation.current) {
      growingPlantRef.current?.play();
    }
  }, [isScanning]);

  if (isScanning) {
    return (
      <ScreenLayout>
        <QRCodeScanner onCancel={stopScanning} onBarCodeScanned={handleBarCodeScanned} />
      </ScreenLayout>
    );
  }

  return (
    <ScreenLayout>
      <View style={{ flex: 1, marginBottom: 15 }}>
        <LottieView
          ref={growingPlantRef}
          source={require("@assets/growing-plant-lottie.json")}
          onAnimationFinish={() => {
            isPlayingAnimation.current = false;
          }}
          loop={false}
          style={{ flex: 1 }}
        />
      </View>

      <Button color="primary" style={{ marginTop: "auto" }}>
        <Typography color="white" size="medium" onPress={scanQRCode}>
          Escanear QR Code
        </Typography>
      </Button>
    </ScreenLayout>
  );
};

export { HomeScreen, HomeScreenProps };
