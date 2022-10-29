import { Typography } from "@atoms/Typography";
import { Container, HeaderContainer } from "./styles";

import { type ViewProps } from "react-native";

type PlantInformationCardProps = Omit<ViewProps, "children"> & {
  description: string;
};

const PlantInformationCard = (props: PlantInformationCardProps) => {
  const { description, ...viewProps } = props;

  return (
    <Container {...viewProps}>
      <HeaderContainer>
        <Typography style={{ textAlign: "center" }} color="primary" size="large" bold>
          Descrição
        </Typography>
      </HeaderContainer>

      <Typography selectable color="font" size="medium">
        {description}
      </Typography>
    </Container>
  );
};

export { PlantInformationCard, PlantInformationCardProps };
