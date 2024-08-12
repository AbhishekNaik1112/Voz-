import { config } from "dotenv";
config();

interface DatabaseConfig {
  HOST: string;
  USER: string;
  PASSWORD: string;
  DB: string;
  DIALECT: string;
}

const dbConfig: DatabaseConfig = {
  HOST: process.env.MYSQL_HOST as string,
  USER: process.env.MYSQL_USER as string,
  PASSWORD: process.env.MYSQL_PASSWORD as string,
  DB: process.env.MYSQL_DB as string,
  DIALECT: process.env.MYSQL_DIALECT as string,
};

export default dbConfig;
