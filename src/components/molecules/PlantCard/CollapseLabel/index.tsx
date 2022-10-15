import { Typography } from "@atoms/Typography";

type CollapseLabelProps = {
  fieldName: string;
  value: string;
};

const CollapseLabel = (props: CollapseLabelProps) => {
  return (
    <>
      <Typography color="primary" size="large" bold>
        {`${props.fieldName} `}
      </Typography>
      <Typography color="font">{props.value}</Typography>
    </>
  );
};

export { CollapseLabel, CollapseLabelProps }
