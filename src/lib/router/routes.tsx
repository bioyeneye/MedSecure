import React from "react";
import type { PathRouteProps } from "react-router-dom";

import Login from "../pages/authentication/login";
import {
  OrganizationRegistration,
  RiderRegistration,
} from "../pages/authentication/register";

import { routeUrls } from "./routecontants";

const Home = React.lazy(() => import("~/lib/pages/home"));

export const routes: Array<PathRouteProps> = [
  {
    path: routeUrls.home,
    element: <Home />,
  },
  {
    path: routeUrls.organizationRegister,
    element: <OrganizationRegistration />,
  },
  {
    path: routeUrls.riderRegister,
    element: <RiderRegistration />,
  },
  {
    path: routeUrls.login,
    element: <Login />,
  },
];

export const privateRoutes: Array<PathRouteProps> = [];
