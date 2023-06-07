import Sequelize from "sequelize";

const sequelize = new Sequelize("silvereconomy", "root", "mi-contraseña", {
  host: "mysql-silvereconomy",
  port: 3306,
  dialect: "mysql",
});

export default sequelize;
