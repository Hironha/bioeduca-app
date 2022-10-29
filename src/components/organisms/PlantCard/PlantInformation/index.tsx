import { Loading } from "@atoms/Loading";
import { PlantInformationCard } from "@molecules/PlantInformationCard";
import { Container } from "./styles";

import { useListPlantInformations } from "@services/hooks/plantInformation/useListPlantInformations";
import { Empty } from "@molecules/Empty";

type PlantInformationProps = {
  fieldName: string;
  emptyText?: string;
};

const PlantInformation = (props: PlantInformationProps) => {
  const emptyText = props.emptyText ?? "Não foi possível encontrar dados sobre essa informação";

  const listResult = useListPlantInformations({
    retry: false,
    cacheTime: 60 * 60 * 1000,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });

  const plantInformation = listResult?.data?.find(
    (plantInformation) => plantInformation.field_name === props.fieldName
  );

  if (listResult.isLoading || listResult.isFetching) {
    return (
      <Container>
        <Loading color="primary" />
      </Container>
    );
  }

  if (!listResult.data || !plantInformation) {
    return (
      <Container>
        <Empty text={emptyText} />
      </Container>
    );
  }

  return <PlantInformationCard description={plantInformation.description} />;
};

export { PlantInformation, PlantInformationProps };
