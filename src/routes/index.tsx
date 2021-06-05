import { APP_ROUTE_PATHS } from "constants/routes";
import { ComponentType } from "react";
import HomeView from "views/Home";

export interface IRoutes {
  exact?: boolean;
  path: string;
  Component: ComponentType<any>;
}


export const routeList: IRoutes[] = [
  {
    path: APP_ROUTE_PATHS.HOME,
    Component: HomeView,
    exact: true,
  },
];
