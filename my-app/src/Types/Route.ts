import { ComponentType } from "react";

export default interface IRoute {
  path: string;
  element: ComponentType;
  index?: boolean;
}
