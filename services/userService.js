import models from "../models/index_model.js";

export const saveUser = async (user) => {
  const model = new models.UserModel({
    userName: user.userName,
    createdAt: new Date(),
  });

  const savedUser = await model.save();
  return savedUser;
};

export const getAllUsers = async () => {
  const User = models.UserModel;
  const users = await User.find();
  return users;
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

  return null;
};

export const deleteUser = async (id) => {
  const User = models.UserModel;
  const result = await User.deleteOne({ _id: id });
  return result;
};