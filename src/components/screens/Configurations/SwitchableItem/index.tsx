import { SwitchContainer, SwitchLabel, SwitchToggle } from "./styles";

import { type SwitchProps } from "@atoms/Switch";

type SwitchableItemProps = Pick<SwitchProps, "value" | "onValueChange" | "disabled"> & {
  label: string;
};

const SwitchableItem = (props: SwitchableItemProps) => {
  const { label, ...switchProps } = props;

  return (
    <SwitchContainer>
      <SwitchLabel color="font" size="medium">
        {props.label}
      </SwitchLabel>

      <SwitchToggle {...switchProps} />
    </SwitchContainer>
  );
};

export { SwitchableItem, SwitchableItemProps };
