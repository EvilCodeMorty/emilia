import Koa from "koa";
import defaultRouter from "../routes/default.route";
import userRouter from "../routes/user.route";
const app = new Koa();
//挂载路由;
app.use(defaultRouter.routes());
app.use(userRouter.routes());
export default app;
