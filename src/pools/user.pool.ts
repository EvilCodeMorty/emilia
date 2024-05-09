/**
 * 用户socket连接池;
 */
class UserPool {
  //用户连接池;
  private static userPool = new Map();
  private constructor() {}
  //用户连接以后加入连接池;
  public static addUser(userId: string, socket: any) {
    try {
      this.userPool.set(userId, socket);
    } catch (error) {}
  }
  //用户断开连接后从连接池中移除;
  //获取用户连接;

  //获取当前连接用户数;
  public static getUserCount() {
    return this.userPool.size;
  }
}

export default UserPool;
