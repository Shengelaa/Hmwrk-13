const userModel = require("../models/user.model");
const { isValidObjectId } = require("mongoose");


const getAllusers = async (req, res) => {
  const users = await userModel.find();
  res.json(users);
};

const createUsers = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: "email is required" });
  }
  const existUser = await userModel.findOne({ email: email });
  if (existUser) {
    return res
      .status(400)
      .json({ message: "user with this email already exists" });
  }
  const user = await userModel.create(req.body);
  res.json(user);
};

const getAlluserById = async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    return res.status(400).json({ message: "invalid id" });
  }
  const user = await userModel.findById(id);

  if (!user) {
    return res.status(404).json({ message: "user not found" });
  }
  res.json(user);
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    return res.status(400).json({ message: "invalid id" });
  }
  const user = await userModel.findByIdAndDelete(id);
  res.json(user);
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    return res.status(400).json({ message: "invalid id" });
  }
  const user = await userModel.findByIdAndUpdate(id, req.body, { new: true });
  res.json(user);
};

module.exports = {
  getAlluserById,
  getAllusers,
  deleteUser,
  updateUser,
  createUsers,
};
