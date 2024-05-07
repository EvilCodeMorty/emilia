import "dotenv/config";
import app from "./app/default.app";
app.listen(process.env["APP_PORT"], () => {
  try {
    console.log(`Emilia启动成功,当前端口号: ${process.env["APP_PORT"]}`);
  } catch (error) {}
});
