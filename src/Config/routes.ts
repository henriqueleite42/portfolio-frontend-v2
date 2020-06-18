export interface IRoute {
  name: string;
  route: string;
  fullRoute?: string;
  component: string;
  blocked?: boolean;
  navBar?: boolean;
  exact?: boolean;
}

// Routes

const nonAuthRoutes = {
  home: {
    name: "home",
    route: "/",
    component: "About",
    navBar: true,
  },
  skills: {
    name: "skills",
    route: "/skills",
    component: "Skills",
    navBar: true,
  },
  projects: {
    name: "projects",
    route: "/projects",
    component: "Projects",
    navBar: true,
  },
  projectDetail: {
    name: "projects",
    route: "/project",
    fullRoute: "/project/:projectID",
    component: "ProjectDetails",
    navBar: true,
    exact: false,
  },
  contact: {
    name: "contact",
    route: "/contact",
    component: "Contact",
    navBar: true,
  },
};
// Get route By Name

const nameRoutes: { [key: string]: string } = {};

for (const route in nonAuthRoutes) {
  nameRoutes[route] = nonAuthRoutes[route as keyof typeof nonAuthRoutes].route;
}

// Export

export type NonAuthRoutesType = keyof typeof nonAuthRoutes;

export const NON_AUTH_ROUTES = Object.values(nonAuthRoutes) as Array<IRoute>;

export const ROUTES_NAME = nameRoutes as {
  [T in NonAuthRoutesType]: string;
};
