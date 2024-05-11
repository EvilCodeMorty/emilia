/**
 * 默认的错误类型;
 */
// 服务启动失败;
const serviceStartupFailure = {
  // 错误码;
  code: "10001",
  // HTTP状态码;
  status: 500,
  // 错误类型;
  type: "serviceError",
  //错误模块;
  module: "service",
  // 错误信息;
  message: "服务启动失败",
  // 错误详情;
  result: null,
};
export { serviceStartupFailure };
