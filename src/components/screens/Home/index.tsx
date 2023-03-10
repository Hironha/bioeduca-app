import { useCallback, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import { Loading } from "@atoms/Loading";
import { Typography } from "@atoms/Typography";
import { ScreenLayout } from "@atoms/ScreenLayout";
import { Button } from "@molecules/Button";
import { Logo } from "./Logo";
import { QRCodeScanner } from "./QRCodeScanner";
import { ValidatingPlantIdContainer } from "./styles";

import { useQRCodeScanner } from "./hooks/useQRCodeScanner";
import { useValidatePlantId } from "./hooks/useValidatePlantId";

import { type BarCodeScanningResult } from "expo-camera";
import { type HomeStackParamsList } from "@navigations/HomeStack";
import { type PlantsStackParamsList } from "@navigations/PlantsStack";
import { type BottomTabsParamsList } from "@navigations/BottomNavigation";
import { type NativeStackScreenProps } from "@react-navigation/native-stack";

type HomeScreenProps = NativeStackScreenProps<
  HomeStackParamsList & BottomTabsParamsList & PlantsStackParamsList,
  "HomeScreen"
>;

const HomeScreen = ({ navigation }: HomeScreenProps): React.ReactElement => {
  const qrCodeScanner = useQRCodeScanner();
  const plantIdValidator = useValidatePlantId();

  const handleBarCodeScanned = useCallback(
    (result: BarCodeScanningResult) => {
      plantIdValidator.validate(result.data);
    },
    [plantIdValidator.validate]
  );

  useFocusEffect(useCallback(() => qrCodeScanner.stop, [qrCodeScanner.stop]));

  useEffect(() => {
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

  if (qrCodeScanner.isScanning) {
    return (
      <ScreenLayout>
        {plantIdValidator.isLoading ? (
          <ValidatingPlantIdContainer>
            <Loading />
          </ValidatingPlantIdContainer>
        ) : null}

        <QRCodeScanner onCancel={qrCodeScanner.stop} onBarCodeScanned={handleBarCodeScanned} />
      </ScreenLayout>
    );
  }

  return (
    <ScreenLayout>
      <Typography style={{ textAlign: "center", fontSize: 30, marginTop: 30, fontWeight: "bold" }}>
        BioEduca
      </Typography>

      <Logo />

      <Button
        color="primary"
        style={{ marginTop: "auto", alignSelf: "center" }}
        rightIcon={<Ionicons name="qr-code" size={18} color="white" />}
      >
        <Typography color="white" size="medium" onPress={qrCodeScanner.scan}>
          Escanear código QR
        </Typography>
      </Button>
    </ScreenLayout>
  );
};

export { HomeScreen, HomeScreenProps };
