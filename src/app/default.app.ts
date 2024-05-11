import Koa from "koa";
import defaultRouter from "../routes/default.route";
import userRouter from "../routes/user.route";
import errorHandler from "../utils/errorHandler";
const app = new Koa();
//挂载路由;
app.use(defaultRouter.routes());
app.use(userRouter.routes());

//统一错误处理,如果是没有上下文的错误则直接调用保存错误日志;
app.on("error", errorHandler);
//导出;
export default app;
