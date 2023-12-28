const sequelize = require("./sequelizeConfig");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./app");

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection has been established successfully.");
    app.listen(process.env.EXPRESSPORT, () => {
      console.log(
        `Server is running on http://localhost:${process.env.EXPRESSPORT}`
      );
    });
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });
