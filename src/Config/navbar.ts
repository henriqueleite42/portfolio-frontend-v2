import { IconProp } from "@fortawesome/fontawesome-svg-core";

import { NonAuthRoutesType } from "Config/routes";

export interface INavItem {
  isActiveInThisRoutes: Array<{
    route: NonAuthRoutesType;
    typeToCheck?: "start" | "equal";
  }>;
  redirectTo: NonAuthRoutesType;
  icon: IconProp;
  name?: string;
}

export const NAV_ITEMS: Array<INavItem> = [
  {
    isActiveInThisRoutes: [
      {
        route: "home",
        typeToCheck: "equal",
      },
    ],
    redirectTo: "home",
    icon: "user",
    name: "About",
  },
  {
    isActiveInThisRoutes: [
      {
        route: "skills",
      },
    ],
    redirectTo: "skills",
    icon: "tools",
  },
  {
    isActiveInThisRoutes: [
      {
        route: "projects",
        typeToCheck: "equal",
      },
      {
        route: "projectDetail",
      },
    ],
    redirectTo: "projects",
    icon: "folder-open",
  },
  {
    isActiveInThisRoutes: [
      {
        route: "experience",
      },
    ],
    redirectTo: "experience",
    icon: "briefcase",
  },
  {
    isActiveInThisRoutes: [
      {
        route: "contact",
      },
    ],
    redirectTo: "contact",
    icon: "comment",
  },
];
