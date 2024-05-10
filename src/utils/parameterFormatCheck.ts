/**
 * @description 参数格式校验;
 * @author EvilCodeMorty<EvilCodeMorty@163.com>;
 * @since 2024-05-09 20:54:00;
 */
// 参数格式校验
const parameterFormatCheck = (parameter: any, format: string) => {
  try {
    // 校验是否符合规定的正则;
    const reg = new RegExp(format);
    if (!reg.test(parameter)) {
      throw new Error("参数格式错误");
    }
    return true;
  } catch (error) {
    return false;
  }
};
export default parameterFormatCheck;
