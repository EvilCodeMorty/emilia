/**
 * 用户相关的路由;
 */
import Router from "koa-router";
import UserPool from "../pools/user.pool";
const userRouter = new Router({ prefix: "/users" });
//用户注册;
userRouter.post("/register", async (ctx) => {
  // 获取当前毫秒数;
  const currentTime = new Date().getTime();
  UserPool.addUser("1", currentTime);
  console.log(`当前连接用户数: ${UserPool.getUserCount()}`);
  ctx.body = "用户注册";
});

export default userRouter;
