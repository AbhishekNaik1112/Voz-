import { Sequelize } from "sequelize";
import dbConfig from "../../config/sql-config";
import initUserModel from "./users";

const sequelize = new Sequelize({
  database: dbConfig.DB,
  username: dbConfig.USER,
  password: dbConfig.PASSWORD,
  host: dbConfig.HOST,
  dialect: dbConfig.DIALECT as "mysql",
  logging: false,
});

const User = initUserModel(sequelize);

interface Db {
  sequelize: Sequelize;
  models: {
    User: typeof User;
  };
}

const db: Db = {
  sequelize,
  models: {
    User,
  },
};

export default db;
