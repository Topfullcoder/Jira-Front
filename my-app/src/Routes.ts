import { lazy } from "react";

import IRoute from "./Types/Route";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));

export const publicRoutes: IRoute[] = [
  {
    path: "/",
    element: Home,
    index: true,
  },
  {
    path: "/login",
    element: Login,
    index: false,
  },
  {
    path: "/register",
    element: Register,
    index: false,
  },
];
