import { Sequelize } from "sequelize";

const sequelize = new Sequelize("silvereconomy", "root", "mi-contraseña", {
  host: "mysql-silvereconomy",
  port: 3350,
  dialect: "mysql",
  define: {
    timestamps: false,
  },
});
sequelize
  .authenticate()
  .then(function (err) {
    console.log("Connection has been established successfully.");
  })
  .catch(function (err) {
    console.log("Unable to connect to the database:", err);
  });

export default sequelize;
