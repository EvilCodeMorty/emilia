/**
 * @description 生成随机字符串;
 * @param {number} number 生成字符串的长度;
 * @returns {string} 返回生成的随机字符串;
 * @author EvilCodeMorty <EvilCodeMorty@163.com>
 * @since 2024-05-09 17:00:00
 */
const generateRandomString = (number: number) => {
  try {
    let result = "";
    //取值范围(想更通用就抽离出去,在调用的时候使用自定义的数值)
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    // 生成随机数;
    const charactersLength = characters.length;
    for (let i = 0; i < number; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  } catch (error) {
    return false;
  }
};
export default generateRandomString;
