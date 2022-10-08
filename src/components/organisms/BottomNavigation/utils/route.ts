import { type BottomTabRoute } from "..";

type RouteConfig = {
  label: string;
  icon: "home" | "md-list";
};

const createHomeRouteConfig = (): RouteConfig => {
  return {
    label: "Início",
    icon: "home",
  };
};

const createPlantsRouteConfig = (): RouteConfig => {
  return {
    label: "Plantas",
    icon: "md-list",
  };
};

const createRouteConfig = (route: BottomTabRoute): RouteConfig => {
  switch (route.name) {
    case "Home":
      return createHomeRouteConfig();
    case "Plants":
      return createPlantsRouteConfig();
    default:
      return createHomeRouteConfig();
  }
};

export { createRouteConfig };
