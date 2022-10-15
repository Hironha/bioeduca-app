import { type ViewProps } from "react-native";
import { type IPlantInformation } from "@interfaces/models/plantInformation";

import { Container, HeaderContainer } from "./styles";
import { Typography } from "@atoms/Typography";

type PlantInformationCardProps = Omit<ViewProps, "children"> & {
  plantInformation: IPlantInformation;
};

const PlantInformationCard = (props: PlantInformationCardProps) => {
  const { plantInformation, ...viewProps } = props;

  return (
    <Container {...viewProps}>
      <HeaderContainer>
        <Typography style={{ textAlign: "center" }} color="primary" size="large" bold>
          {plantInformation.field_name}
        </Typography>
      </HeaderContainer>

      <Typography color="font" size="medium">
        {plantInformation.description}
      </Typography>
    </Container>
  );
};

export { PlantInformationCard, PlantInformationCardProps };
