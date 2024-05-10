/**
 * @description 错误处理函数,日志处理;
 * @author EvilCodeMorty<EvilCodeMorty@163.com>
 * @date 2021/10/12
 */
import { Context } from "koa";
import errorlogSave from "./errorlogSave";
// 参数类型;
type ErrorType = {
  code: string;
  status: number;
  type: string;
  message: string;
  result: any;
};
const errorHandler = (error: ErrorType, ctx?: Context) => {
  try {
    // 错误日志数据;
    const errorLogData = {
      //错误码;
      code: error.code,
      //错误网络状态码;
      status: error.status,
      //错误类型;
      type: error.type,
      //错误信息;
      message: error.message,
      //错误结果;
      result: error.result,
      //错误时间;
      time: new Date().toLocaleString(),
      //错误上下文;
      logContext: {},
    };
    //如果存在上下文;
    if (ctx !== undefined) {
      // 网络状态码;
      ctx.status = error.status;
      // 返回错误信息;
      ctx.body = {
        code: error.code,
        message: error.message,
        result: error.result,
      };
      // 日志上下文信息简化处理;
    }
    // 如果不存在上下文则直接保存;
    errorlogSave(errorLogData);
  } catch (error) {}
};
export default errorHandler;
