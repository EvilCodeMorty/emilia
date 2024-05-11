/**
 * @description 错误日志本地化保存;
 * @author EvilCodeMorty<EvilCodeMorty@163.com>;
 * @since 2024-05-10 15:51:00;
 */
import path from "path";
import fs from "fs";
type ErrorLogData = {};
const errorlogSave = async (errorLogData: ErrorLogData) => {
  try {
    //获取当前年份;
    const year = new Date().getFullYear();
    //获取当前月份,如果月份小于10,则月份前面补0;;
    let month = String(new Date().getMonth() + 1).padStart(2, "0");
    const fileName = `${year}${month}`;
    const filePath = path.join(__dirname, `../logs/error/${fileName}.json`);
    //判断文件是否存在;
    if (fs.existsSync(filePath)) {
      let data = await fs.promises.readFile(filePath, "utf-8");
      // 一般自动创建文件是不会为空的,防止某些手动删除日志文件内容导致系统报错;
      if (data === "") {
        data = "[]";
      }
      // 将数据转换为JSON格式;
      const updatedData = JSON.parse(data);
      // 将新的错误日志数据添加到数组中;
      updatedData.push(errorLogData);
      // 将更新后的数据写入文件;
      await fs.promises.writeFile(filePath, JSON.stringify(updatedData));
    } else {
      await fs.promises.writeFile(filePath, JSON.stringify([errorLogData]));
    }
  } catch (error) {
    console.log("写入数据失败", error);
  }
};
export default errorlogSave;
