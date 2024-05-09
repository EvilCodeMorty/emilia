/**
 * 用户相关的服务控制;
 */
class UserService {
  async createUser(user: string) {
    try {
      console.log(user);
    } catch (error) {}
  }
}
export default new UserService();
