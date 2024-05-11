/**
 * @description 错误日志本地化保存;
 * @author EvilCodeMorty<EvilCodeMorty@163.com>;
 * @since 2024-05-10 15:51:00;
 */
import path from "path";
import fs from "fs";
type ErrorLogData = {};
const errorlogSave = async (errorLogData: ErrorLogData) => {
  console.log("errorLogData", errorLogData);
  try {
    //获取当前年份;
    const year = new Date().getFullYear();
    //获取当前月份;
    let month = String(new Date().getMonth() + 1);
    //如果月份小于10,则月份前面补0;
    if (Number(month) < 10) {
      month = String(month).padStart(2, "0");
    }
    const fileName = `${year}${month}`;
    const filePath = path.join(__dirname, `../logs/error/${fileName}.json`);
    //判断文件是否存在;
    try {
      fs.accessSync(filePath, fs.constants.F_OK);
      //如果文件存在;
      const data = fs.readFileSync(filePath, "utf8");
      //将文件内容转为json格式;
      const jsonData = JSON.parse(data);
      //将错误日志添加到数组中;
      jsonData.push(errorLogData);
      //将json格式数据重新写入文件中;
      fs.writeFileSync(filePath, JSON.stringify(jsonData));
    } catch (error) {
      // 如果文件不存在;
      fs.writeFileSync(filePath, JSON.stringify([errorLogData]));
    }
  } catch (error) {}
};
export default errorlogSave;
