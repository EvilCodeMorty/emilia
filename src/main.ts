import "dotenv/config";
import app from "./app/default.app";
import UserPool from "./pools/user.pool";
import errorHandler from "./utils/errorHandler";
import { serviceStartupFailure } from "./constants/error/default.error.type.constant";
//记录启动时间;
const startTime = new Date().getTime();
//根据网络协议启动对应的服务;
if (process.env["APP_PROTOCOL"] === "http") {
  app.listen(process.env["APP_PORT"], () => {
    try {
      //启动结束时间;
      const endTime = new Date().getTime();
      //计算启动时间;
      const startUpTime = endTime - startTime;
      console.log(`Emilia启动成功,此次启动耗时: ${startUpTime}ms`);
      console.log(`当前连接用户数: ${UserPool.getUserCount()}`);
    } catch (error) {
      errorHandler(serviceStartupFailure);
    }
  });
}
if (process.env["APP_PROTOCOL"] === "https") {
  try {
  } catch (error) {}
}
