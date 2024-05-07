/**
 * 用户相关的路由;
 */
import Router from "koa-router";
const userRouter = new Router({ prefix: "/user" });
userRouter.get("/", async (ctx) => {
  ctx.body = "用户首页";
});

export default userRouter;
