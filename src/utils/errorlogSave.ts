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
    //获取当前月份;
    let month = String(new Date().getMonth() + 1);
    //如果月份小于10,则月份前面补0;
    if (Number(month) < 10) {
      month = String(month).padStart(2, "0");
    }
    const fileName = `${year}${month}`;
    const filePath = path.join(__dirname, `../logs/error/${fileName}.json`);
    //判断文件是否存在;
    fs.access(filePath, fs.constants.F_OK, (err) => {
      //如果文件存在;
      if (err === null) {
        // 打开json文件,把数据转化成数组;
        fs.readFile(filePath, "utf8", (error, data) => {
          if (error) {
          }
          //把数据转化成数组;
          const dataArr = JSON.parse(data);
          //把数据追加到数组中;
          dataArr.push(errorLogData);
          //把数组转化成字符串;
          const dataStr = JSON.stringify(dataArr);
          //把字符串写入文件;
          fs.writeFile(filePath, dataStr, (res) => {
            if (res) {
            }
          });
        });
      } else {
        //如果文件不存在,则创建文件并追加数据;
        fs.writeFile(filePath, JSON.stringify([errorLogData]) + "\n", (res) => {
          console.log(res);
        });
      }
    });
  } catch (error) {}
};
export default errorlogSave;
