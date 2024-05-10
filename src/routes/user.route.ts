/**
 * 用户相关的路由;
 */
import Router from "koa-router";
import { register } from "../controllers/user.controller";
const userRouter = new Router({ prefix: "/users" });
//用户注册;
userRouter.post("/register", register);
//导出;
export default userRouter;
