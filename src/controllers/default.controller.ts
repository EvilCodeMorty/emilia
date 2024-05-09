/**
 * 默认路由的业务处理;
 */
// import { Context, Next } from "koa";
import UserVerificationCodePool from "../pools/verification.code.pool";
class DefaultController {
  //发送验证码
  async sendVerificationCode() {
    try {
      //获取用户邮箱并发送验证码;
      UserVerificationCodePool.createUserVerificationCode("email");
    } catch (error) {}
  }
}
//实例化;
const defaultController = new DefaultController();
//导出;
export const sendVerificationCode = defaultController.sendVerificationCode;
