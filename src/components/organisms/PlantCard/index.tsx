import { useMemo } from "react";

import { Dimensions } from "react-native";
import { Typography } from "@atoms/Typography";
import { List } from "@molecules/List";
import { Collapse } from "@molecules/Collpase";
import { Carousel } from "@organisms/Carousel";

import { ImageModal } from "./ImageModal";
import { CollapseLabel } from "./CollapseLabel";
import { PlantInformation } from "./PlantInformation";
import { useImageModal } from "./hooks/useImageModal";
import { PlantCardContainer, InformationCollapseContainer } from "./styles";

import { type IPlant } from "@interfaces/models/plant";

type PlantCardProps = {
  plant: IPlant;
};

const screenWidth = Dimensions.get("screen").width;

const normalizeString = (str: string) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

const PlantCard = (props: PlantCardProps) => {
  const { plant } = props;
  const imageModal = useImageModal();

  const listPlantsData = useMemo(() => {
    return Object.entries(plant.additional_informations).sort(([nameLeft], [nameRight]) => {
      const normalizedNameLeft = normalizeString(nameLeft);
      const normalizedNameRight = normalizeString(nameRight);
      if (normalizedNameLeft > normalizedNameRight) return 1;
      if (normalizedNameLeft < normalizedNameRight) return -1;
      return 0;
    });
  }, [plant.additional_informations, normalizeString]);

  const carouselData = useMemo(() => {
    return plant.images.map((imageURI) => ({ imageURI }));
  }, [plant.images]);

  return (
    <PlantCardContainer>
      <Typography color="primary" size="extraLarge" bold>
        {plant.popular_name}
      </Typography>
      <Typography size="medium" italic>
        {plant.scientific_name}
      </Typography>

      <Carousel
        style={{ marginVertical: 12 }}
        data={carouselData}
        width={screenWidth - 24}
        height={250}
        imageStyles={{ resizeMode: "contain" }}
        keyExtractor={(item) => item.imageURI}
        onItemPress={(item) => imageModal.open(item.imageURI)}
      />

      <List
        style={{ marginTop: 8 }}
        gap={16}
        dataSource={listPlantsData}
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

      <ImageModal
        visible={imageModal.visible}
        imageURI={imageModal.imageURI ?? undefined}
        onClose={imageModal.close}
      />
    </PlantCardContainer>
  );
};

export { PlantCard, PlantCardProps };
