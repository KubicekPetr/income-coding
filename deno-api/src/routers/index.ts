import { Application } from "../../deps.ts";
import postsRouter from "./postsRouter.ts";

const initRouters = (app: Application) => {
  app.use(postsRouter.routes());
};

export default initRouters;
