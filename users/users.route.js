const { Router } = require("express");
const {
  getAllusers,
  createUsers,
  getAlluserById,
  deleteUser,
  updateUser,
} = require("./users.service");
const validateUser = require("../middleware/delete.middleware");

const userRouter = Router();

userRouter.get("/", getAllusers);

userRouter.post("/", createUsers);

userRouter.get("/:id", getAlluserById);

userRouter.delete("/:id", validateUser, deleteUser);

userRouter.put("/:id", updateUser);

module.exports = userRouter;

// userRouter.post("/", async (req, res) => {
//     const { email } = req.body;
//     if (!email) {
//       return res.status(400).json({ message: "email is required" });
//     }
//     const existUser = await userModel.findOne({ email: email });
//     if (existUser) {
//       return res.status(400).json({ message: "user already exists" });
//     }
//     const user = await userModel.create(req.body);
//     res.json(user);
//   });
