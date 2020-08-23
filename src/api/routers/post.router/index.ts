import { Router } from "express";

import { SIGNUP, SIGNIN, POSTS } from "../constants";
import { HttpVerb } from "../../../utils/constants";
import BaseRouter from "../base.router";
import { IRoute } from "../../../interfaces/IRoute";
import { Service } from "typedi";
import { PostController } from "../../controllers";

@Service()
class PostRouter extends BaseRouter {
  constructor(router: Router) {
    super(router);
  }

  get routes() {
    let routes: Array<IRoute> = [];
    routes.push({
      httpVerb: HttpVerb.POST,
      path: POSTS,
      handlers: [PostController.getPosts],
    });
    return routes;
  }
}

export default PostRouter;
