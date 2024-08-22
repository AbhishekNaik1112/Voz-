import { Sequelize, DataTypes, Model, Optional } from "sequelize";

interface UserAttributes {
  id: number;
  username: string;
  email: string;
  password: string;
  role?: "admin" | "user";
}

interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number;
  public username!: string;
  public email!: string;
  public password!: string;
  public role?: "admin" | "user";

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

const initUserModel = (sequelize: Sequelize): typeof User => {
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.ENUM("admin", "user"),
        defaultValue: "user",
      },
    },
    {
      sequelize,
      tableName: "users",
      timestamps: false,
    }
  );

  return User;
};

export default initUserModel;
