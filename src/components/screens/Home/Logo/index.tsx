import { useState, useCallback } from "react";
import { View, Image, type LayoutChangeEvent } from "react-native";

type LayoutChangeHandler = (event: LayoutChangeEvent) => void;

const Logo = () => {
  const [height, setHeight] = useState<number | null>(null);

  const setupHeightOnLayout = useCallback<LayoutChangeHandler>((event): void => {
    const { height } = event.nativeEvent.layout;
    setHeight((previous) => {
      if (!previous) return height;
      return previous;
    });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {height ? (
        <Image
          style={{
            flex: 1,
            width: undefined,
            height,
            margin: 12,
            resizeMode: "contain",
          }}
          source={require("@assets/images/bioeduca-logo.png")}
        />
      ) : (
        <View style={{ flex: 1 }} onLayout={setupHeightOnLayout} />
      )}
    </View>
  );
};

export { Logo };
