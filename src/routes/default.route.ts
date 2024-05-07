/**
 * 一些默认路由;
 */
import Router from "koa-router";
const defaultRouter = new Router();
defaultRouter.get("/", async (ctx) => {
  ctx.body = "首页";
});

export default defaultRouter;
