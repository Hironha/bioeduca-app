import { useCallback } from "react";
import { View, Pressable } from "react-native";
import { Camera, CameraType, type BarCodeScanningResult } from "expo-camera";
import { useFocusEffect } from "@react-navigation/native";

import { Typography } from "@atoms/Typography";
import { ScreenLayout } from "@atoms/ScreenLayout";
import { QRCodeButton } from "./styles";

import { useQRCodeScanner } from "./hooks/useQRCodeScanner";

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

  useFocusEffect(useCallback(() => stopScanning, [stopScanning]));

  const handleBarCodeScanned = useCallback((result: BarCodeScanningResult) => {
    navigation.navigate("PlantsTab", {
      screen: "ConsultPlantScreen",
      params: { plantId: result.data, plantPopularName: "Teste" },
      initial: false,
    });
  }, []);

  if (isScanning) {
    return (
      <ScreenLayout>
        <View style={{ flex: 1, borderRadius: 5, overflow: "hidden", marginVertical: 12 }}>
          <Camera
            ratio="16:9"
            type={CameraType.back}
            style={{
              backgroundColor: "red",
              position: "relative",
              flex: 1,
            }}
            onBarCodeScanned={handleBarCodeScanned}
          >
            <Pressable style={{ position: "absolute", top: 10, left: 10 }} onPress={stopScanning}>
              <Typography color="white">X</Typography>
            </Pressable>
            <View style={{ position: "absolute", bottom: 0, opacity: 0.7, padding: 16 }}>
              <Typography color="white">Aponte a câmera para o código QR</Typography>
            </View>
          </Camera>
        </View>
      </ScreenLayout>
    );
  }

  return (
    <ScreenLayout>
      <QRCodeButton>
        <Typography color="white" size="medium" onPress={scanQRCode}>
          Escanear QR Code
        </Typography>
      </QRCodeButton>
    </ScreenLayout>
  );
};

export { HomeScreen, HomeScreenProps };
