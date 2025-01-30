// მოგესალმებით თქვენი დავალება შემდეგია

// 1) შექმენით ახალი ექსპრესის პროექტი სადაც გექნებათ იუზერების და პროდუქტების მოდულები(CRUD). აქ იგულისხმება თითოეული მოდული თავისი როუტერით და თავისი სერვისით.
// 2) დააინტეგრირეთ მონგოდბ, მონგუსის გამოყენებით.
// 3) გააკეთეთ მიდლვიარი რომელიც დაედება პროდუქტის წაშლას, და შეამოწმებთ თუ პროდუქტის წაშლისას ჰედერში არ გამოგატანათ ვალიდური იუზერის აიდი არ წააშლევინოთ პროდუქტი.

const express = require("express");

const app = express();
const connectDB = require("./db/db");
const userRouter = require("./users/users.route");

app.use(express.json());
connectDB();
app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(3000, () => {
  console.log("running on http://localhost:3000");
});
