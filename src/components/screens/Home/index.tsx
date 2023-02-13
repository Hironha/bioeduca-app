import { useCallback, useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import { Loading } from "@atoms/Loading";
import { Typography } from "@atoms/Typography";
import { ScreenLayout } from "@atoms/ScreenLayout";
import { Button } from "@molecules/Button";
import { QRCodeScanner } from "./QRCodeScanner";
import { ValidatingPlantIdContainer } from "./styles";

import { useQRCodeScanner } from "./hooks/useQRCodeScanner";
import { useValidatePlantId } from "./hooks/useValidatePlantId";

import { type BarCodeScanningResult } from "expo-camera";
import { type HomeStackParamsList } from "@navigations/HomeStack";
import { type PlantsStackParamsList } from "@navigations/PlantsStack";
import { type BottomTabsParamsList } from "@navigations/BottomNavigation";
import { type NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image, View } from "react-native";

type HomeScreenProps = NativeStackScreenProps<
  HomeStackParamsList & BottomTabsParamsList & PlantsStackParamsList,
  "HomeScreen"
>;

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const [imageHeight, setImageHeight] = useState(0);
  const { isScanning, scanQRCode, stopScanning } = useQRCodeScanner();
  const plantIdValidator = useValidatePlantId();

  const handleBarCodeScanned = useCallback(
    (result: BarCodeScanningResult) => {
      plantIdValidator.validate(result.data);
    },
    [plantIdValidator.validate]
  );

  useFocusEffect(useCallback((): (() => void) => stopScanning, [stopScanning]));

  useEffect((): void => {
    if (plantIdValidator.isValid && plantIdValidator.plant) {
      navigation.navigate("PlantsTab", {
        screen: "ConsultPlantScreen",
        params: {
          plantId: plantIdValidator.plant.id,
          plantPopularName: plantIdValidator.plant.popular_name,
        },
        initial: false,
      });
    }
  }, [plantIdValidator.isValid, plantIdValidator.plant]);

  if (isScanning) {
    return (
      <ScreenLayout>
        {plantIdValidator.isLoading ? (
          <ValidatingPlantIdContainer>
            <Loading />
          </ValidatingPlantIdContainer>
        ) : null}

        <QRCodeScanner onCancel={stopScanning} onBarCodeScanned={handleBarCodeScanned} />
      </ScreenLayout>
    );
  }

  return (
    <ScreenLayout>
      <Typography style={{ textAlign: "center", fontSize: 30, marginTop: 30, fontWeight: "bold" }}>
        BioEduca
      </Typography>

      {imageHeight ? (
        <Image
          style={{
            flex: 1,
            width: undefined,
            height: imageHeight,
            margin: 16,
            resizeMode: "contain",
          }}
          source={require("@assets/images/bioeduca-logo.png")}
        />
      ) : (
        <View
          style={{ flex: 1 }}
          onLayout={(event) => setImageHeight(event.nativeEvent.layout.height)}
        />
      )}

      <Button
        color="primary"
        style={{ marginTop: "auto", alignSelf: "center" }}
        rightIcon={<Ionicons name="qr-code" size={18} color="white" />}
      >
        <Typography color="white" size="medium" onPress={scanQRCode}>
          Escanear código QR
        </Typography>
      </Button>
    </ScreenLayout>
  );
};

export { HomeScreen, HomeScreenProps };
