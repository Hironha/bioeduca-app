import { cloneElement } from "react";
import { View, type ViewProps } from "react-native";

type ListProps<T> = Omit<ViewProps, "children"> & {
  gap?: number;
  dataSource: Array<T>;
  getKey: (item: T) => string;
  renderItem: (item: T) => JSX.Element;
};

const List = <T,>(props: ListProps<T>) => {
  const { dataSource, renderItem, gap = 0, getKey, ...viewProps } = props;

  return (
    <View {...viewProps}>
      {dataSource.map((item, index) => {
        const element = renderItem(item);
        const isFirstElement = index === 0;

        return cloneElement(element, {
          key: getKey(item),
          style: {
            ...element?.props?.style,
            ...(!isFirstElement && {
              marginTop: gap,
            }),
          },
        });
      })}
    </View>
  );
};

export { List, ListProps };
