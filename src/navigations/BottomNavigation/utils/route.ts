import { type BottomTabRoute } from "..";

type RouteConfig = {
  label: string;
  icon: "home" | "md-list" | "settings";
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

const createConfigurationsRouteConfig = (): RouteConfig => {
  return {
    label: "Configurações",
    icon: "settings",
  };
};

const createRouteConfig = (route: BottomTabRoute): RouteConfig => {
  switch (route.name) {
    case "HomeTab":
      return createHomeRouteConfig();
    case "PlantsTab":
      return createPlantsRouteConfig();
    case "ConfigurationsTab":
      return createConfigurationsRouteConfig();
    default:
      return createHomeRouteConfig();
  }
};

export { createRouteConfig };
