import React from "react";
import type { PathRouteProps } from "react-router-dom";

import { routeUrls } from "./routecontants";

const Home = React.lazy(() => import("~/lib/pages/home"));
const OrganizationRegistration = React.lazy(
  () => import("~/lib/pages/authentication/register")
);

export const routes: Array<PathRouteProps> = [
  {
    path: routeUrls.home,
    element: <Home />,
  },
  {
    path: routeUrls.organizationRegister,
    element: <OrganizationRegistration />,
  },
];

export const privateRoutes: Array<PathRouteProps> = [];
