const model = require("./model");
const bcrypt = require("bcrypt");

const create = async (payload) => {
  const { password, roles, ...rest } = payload;
  rest.password = await bcrypt.hash(password, +process.env.SALT_ROUND);
  rest.isActive = true;
  rest.isEmailVerified = true;
  return await model.create(rest);
};
module.exports = {
  create,
};
