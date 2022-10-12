import { Text, Pressable } from "react-native";

import { ListPlantsPreview } from "@organisms/ListPlantsPreview";
import { ScreenLayout } from "@atoms/ScreenLayout";

import { type PlantsStackParamsList } from "@navigations/PlantsStack";
import { type BottomTabsParamsList } from "@navigations/BottomNavigation";
import { type NativeStackScreenProps } from "@react-navigation/native-stack";
import { type IPlantPreview } from "@interfaces/models/plant";

type ListPlantsScreenProps = NativeStackScreenProps<PlantsStackParamsList & BottomTabsParamsList>;

const mock: IPlantPreview[] = [
  {
    id: "0BIx17DJKMmBOgM35YBp",
    popular_name: "Pinheiro do Paraná",
    scientific_name: "Araucaria angustifólia",
    images: [
      "https://storage.googleapis.com/projeto-bioeduca-5a2f3.appspot.com/plants%2F0BIx17DJKMmBOgM35YBp/pinheiro-do-parana.jpg",
      "https://storage.googleapis.com/projeto-bioeduca-5a2f3.appspot.com/plants%2F0BIx17DJKMmBOgM35YBp/pinheiro-do-parana-2.jpg",
    ],
  },
  {
    id: "vZLRUFYCfLwusuQXiaxn",
    popular_name: "hironha san",
    scientific_name: "homo-hironhas",
    images: [
      "https://storage.googleapis.com/projeto-bioeduca-5a2f3.appspot.com/plants%2FvZLRUFYCfLwusuQXiaxn/QR Code.jpeg",
    ],
  },
  {
    id: "dE0k5szGQS0qcvd7hWxd",
    popular_name: "hironha",
    scientific_name: "homo-hironhas",
    images: [
      "https://storage.googleapis.com/projeto-bioeduca-5a2f3.appspot.com/plants%2FdE0k5szGQS0qcvd7hWxd/QR Code.jpeg",
    ],
  },
  {
    id: "bVse3KpjG9e5hU8wpNQd",
    popular_name: "hironha",
    scientific_name: "homo-hironhas",
    images: [
      "https://storage.googleapis.com/projeto-bioeduca-5a2f3.appspot.com/plants%2FbVse3KpjG9e5hU8wpNQd/QR Code.jpeg",
    ],
  },
  {
    id: "X3dYLFbg0BxuNXNaPmbS",
    popular_name: "hironha",
    scientific_name: "homo-hironhas",
    images: [
      "https://storage.googleapis.com/projeto-bioeduca-5a2f3.appspot.com/plants%2FX3dYLFbg0BxuNXNaPmbS/QR Code.jpeg",
    ],
  },
];

const ListPlantsScreen = ({ route, navigation }: ListPlantsScreenProps) => {
  return (
    <ScreenLayout>
      <Text>List plants screen</Text>
      <Pressable onPress={() => navigation.navigate("ConsultPlantScreen", { plantId: "teste" })}>
        <Text>To Consult</Text>
      </Pressable>

      <ListPlantsPreview data={mock} />
    </ScreenLayout>
  );
};

export { ListPlantsScreen, ListPlantsScreenProps };
