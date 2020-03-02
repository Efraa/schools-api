const dotenv = require("dotenv");
dotenv.config();

const config = {
  type: "postgres",
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: process.env.SYNCHRONIZE,
  logging: false,
  entities: ["build/src/application/**/domain/*.entity.js"],
};

module.exports = config;
