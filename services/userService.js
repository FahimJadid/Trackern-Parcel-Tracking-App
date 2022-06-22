import models from "../models/index_model.js";
import { NotFound } from "../utils/error.js";

export const getAllUsers = async () => {
  const User = models.UserModel;
  const users = await User.find();
  return users;
};

export const saveUser = async (user) => {
  const model = new models.UserModel({
    userName: user.userName,
    createdAt: new Date(),
  });
  const savedUser = await model.save();
  return savedUser;
};

export const updateUser = async (user) => {
  const id = user._id;
  const User = models.UserModel;
  let model = await User.findById(id);
  if (model) {
    model.userName = user.userName;
    model.save();
    return model;
  }

  throw new NotFound(`User : ${id} Not Found!`);
};

export const deleteUser = async (id) => {
  const User = models.UserModel;

  let model = await User.findById(id);
  if (model) {
    const result = await User.deleteOne({ _id: id });
    return result;
  }
  throw new NotFound(`User : ${id} Not Found!`);
};
