import { Router } from "express";

import { AUTH_ROUTE, USERS_ROUTE } from "./routers/constants";
import { PostRouter } from "./routers";
import Container from "typedi";

const routes = () => {
  const appRouter: Router = Router();
  appRouter.use(USERS_ROUTE, Container.get(PostRouter).router);
  return appRouter;
};

export default routes;
