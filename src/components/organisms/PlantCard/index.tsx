import { useMemo } from "react";

import { Dimensions } from "react-native";
import { Typography } from "@atoms/Typography";
import { List } from "@molecules/List";
import { Collapse } from "@molecules/Collpase";
import { Carousel } from "@organisms/Carousel";

import { PlantInformation } from "./PlantInformation";
import { CollapseLabel } from "./CollapseLabel";
import { PlantHeaderContainer, PlantCardContainer, InformationCollapseContainer } from "./styles";

import { type IPlant } from "@interfaces/models/plant";

type PlantCardProps = {
  plant: IPlant;
};

const screenWidth = Dimensions.get("screen").width;

const PlantCard = (props: PlantCardProps) => {
  const { plant } = props;

  const dataSource = Object.entries(plant.additional_informations);

  const carouselData = useMemo(() => {
    return plant.images.map((imageURI) => ({ imageURI }));
  }, [plant.images]);

  return (
    <PlantCardContainer>
      <PlantHeaderContainer>
        <Typography color="primary" size="extraLarge" bold>
          {plant.popular_name}
        </Typography>
        <Typography size="medium" italic>
          {plant.scientific_name}
        </Typography>
      </PlantHeaderContainer>

      <Carousel
        style={{ marginVertical: 12 }}
        data={carouselData}
        width={screenWidth - 24}
        height={250}
        imageStyles={{ resizeMode: "contain" }}
        keyExtractor={(item) => item.imageURI}
      />

      <List
        style={{ marginTop: 16 }}
        gap={16}
        dataSource={dataSource}
        getKey={([fieldName]) => fieldName}
        renderItem={([fieldName, value]) => (
          <InformationCollapseContainer>
            <Collapse
              iconStyle={{ color: "primary" }}
              label={<CollapseLabel fieldName={fieldName} value={value} />}
            >
              <PlantInformation
                fieldName={fieldName}
                emptyText={`Não foi possível encontrar dados sobre ${value}`}
              />
            </Collapse>
          </InformationCollapseContainer>
        )}
      />
    </PlantCardContainer>
  );
};

export { PlantCard, PlantCardProps };
