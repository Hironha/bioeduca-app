module.exports = function (api) {
  api.cache(false);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module:react-native-dotenv",
        {
          envName: "APP_ENV",
          moduleName: "@env",
          path: ".env",
          allowlist: ["API_BASE_URL"],
          safe: true,
          allowUndefined: true,
        },
      ],
      "transform-inline-environment-variables",
      "react-native-reanimated/plugin",
    ],
  };
};
