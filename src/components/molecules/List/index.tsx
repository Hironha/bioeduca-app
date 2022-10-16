import { cloneElement } from "react";
import { View, type ViewProps } from "react-native";

type ListProps<T> = Omit<ViewProps, "children"> & {
  gap?: number;
  horizontal?: boolean;
  dataSource: Array<T>;
  getKey: (item: T) => string;
  renderItem: (item: T) => JSX.Element;
};

const List = <T,>(props: ListProps<T>) => {
  const { dataSource, renderItem, gap = 0, getKey, ...viewProps } = props;

  return (
    <View
      {...viewProps}
      style={[props.style, { flexDirection: props.horizontal ? "row" : "column" }]}
    >
      {dataSource.map((item, index) => {
        const element = renderItem(item);
        const isFirstElement = index === 0;

        return cloneElement(element, {
          key: getKey(item),
          style: {
            ...element?.props?.style,
            ...(!isFirstElement && !props.horizontal && { marginTop: gap }),
            ...(!isFirstElement && props.horizontal && { marginLeft: gap }),
          },
        });
      })}
    </View>
  );
};

export { List, ListProps };
