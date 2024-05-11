/**
 * 用户相关的业务处理;
 */
import { Context } from "koa";
import { userRegisterFailure } from "../constants/error/user.error.type.constant";
class UserController {
  //用户注册控制器;
  async register(ctx: Context) {
    try {
      ctx.app.emit("error", userRegisterFailure, ctx);
      return;
    } catch (error) {
      ctx.app.emit("error", userRegisterFailure, ctx);
      return;
    }
  }
}
//实例化;
const userController = new UserController();
export const register = userController.register;
