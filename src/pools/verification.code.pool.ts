/**
 * 用户验证码池;
 */
import generateRandomString from "../utils/generateRandomString";
class UserVerificationCodePool {
  //用户验证码池;
  private static userVerificationCodePool = new Map();
  //添加验证码;
  public static createUserVerificationCode(user_email: string) {
    try {
      //查询用户是否已有验证码;
      const user_verification_code = this.userVerificationCodePool.get(user_email);
      console.log(user_verification_code);
      //如果验证码存在就返回验证码还剩的时间,如果不纯在就创建验证码;
      if (user_verification_code !== undefined) {
        return user_verification_code.time;
      }
      //创建验证码;
      const user_verification_code_string = generateRandomString(6);
      //获取当前时间戳;
      const user_verification_code_time = Date.now();
      //添加到验证码管理池;
      this.userVerificationCodePool.set(user_email, {
        //验证码;
        verification_code: user_verification_code_string,
        //验证码创建时间;
        time: user_verification_code_time,
        //验证码错误使用次数;
        verification_code_ill_usage: 0,
        //验证码正确使用次数;
        verification_code_right_usage: 0,
        //错误次数满了以后进行的错误惩罚,添加一天时间的验证码限制使用时间;
        verification_code_ill_usage_punishment: false,
        //处罚时间;
        verification_code_ill_usage_punishment_time: 0,
      });
      //返回验证码;
      return user_verification_code_string;
    } catch (error) {}
  }
  //验证验证码;
  public static verifyUserVerificationCode(user_email: string, verification_code: string) {
    try {
      //查询用户是否已有验证码;
      const result = this.userVerificationCodePool.get(user_email);
      //如果验证码不存在;
      if (result === undefined) {
        return false;
      }
      //如果验证码存在就进行账号的封禁检查;
      // 判断账号是否存在封禁时间;
      if (result.verification_code_ill_usage_punishment_time !== 0) {
        //获取当前时间
        const currentTime = Date.now();
        const timeRemaining = currentTime - result.verification_code_ill_usage_punishment_time;
        //判断封禁时间是否过期;
        if (timeRemaining <= 24 * 60 * 60 * 1000) {
          return {
            message: "该验证码存在多次错误使用,已被封禁,请联系管理员或一天后重新申请",
          };
        }
      }
      //如果不存在封禁时间就进行验证码校验;
      //如果验证码错误次数过多就进行账号封禁处理
      if (verification_code !== result.verification_code) {
        result.verification_code_ill_usage++;
        //判断是否达到错误次数;
        if (result.verification_code_ill_usage >= 6) {
          // 清空错误次数, 封禁账号, 设置解封时间;
          result.verification_code_ill_usage = 0;
          result.verification_code_ill_usage_punishment = true;
          result.verification_code_ill_usage_punishment_time = result.time + 24 * 60 * 60 * 1000;
          return {
            message: "该验证码存在多次错误使用,已被封禁,请联系管理员或一天后重新申请",
          };
        }
      }
      return true;
    } catch (error) {
      return false;
    }
  }
}
export default UserVerificationCodePool;
