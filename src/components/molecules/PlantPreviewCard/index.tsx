import { Typography } from "@atoms/Typography";

import { PlantCardContainer, InformationContainer, PlantImage, PressableContainer } from "./styles";

import { type ViewProps } from "react-native";
import { type AnimateProps } from "react-native-reanimated";

type PlantPreviewCardProps = Omit<AnimateProps<ViewProps>, "children"> & {
  onPress?: () => void;
  imageURI: string;
  scientificName: string;
  popularName: string;
};

const PlantPreviewCard = (props: PlantPreviewCardProps) => {
  const { scientificName, popularName, imageURI, onPress, ...cardProps } = props;

  return (
    <PlantCardContainer style={[{ elevation: 6 }, props.style]} {...cardProps}>
      <PressableContainer onPress={onPress}>
        <PlantImage source={{ uri: imageURI }} />

        <InformationContainer>
          <Typography color="primary" size="large" bold>
            {popularName}
          </Typography>

          <Typography color="font" size="small" italic>
            {scientificName}
          </Typography>
        </InformationContainer>
      </PressableContainer>
    </PlantCardContainer>
  );
};

export { PlantPreviewCard, PlantPreviewCardProps as PlantCardProps };
