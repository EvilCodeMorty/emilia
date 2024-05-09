/**
 * 一些默认路由;
 */
import { Context } from "koa";
import Router from "koa-router";
import { sendVerificationCode } from "../controllers/default.controller";
const defaultRouter = new Router();
defaultRouter.get("/", async (ctx: Context) => {
  ctx.body = "首页";
});
//发送验证码;
defaultRouter.post("/sendVerificationCode", sendVerificationCode);

export default defaultRouter;
