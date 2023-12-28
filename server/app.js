const express = require("express");
const app = express();
app.use(express.static(`${__dirname}/public`));
app.use(express.json());
const userRouter = require("./routes/userRoutes");

app.use((req, res, next) => {
  const path = req.path;
  console.log(`Requested path: ${path}`);

  next();
});

app.use("/api/v1/users", userRouter);

module.exports = app;
