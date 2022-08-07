const UserModel = require("../module/user")


class UserServices {
  async createUser(payload) {
      console.log(payload);
        const result = await UserModel.create(payload)
        
        return { success: true, body: result }
  }

  async findByEmail(obj) {
    const result = await UserModel.findOne({email:obj.email})

    return { success: true, body: result }
  }

}

module.exports = { UserServices }