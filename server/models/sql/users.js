module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
      "User",
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        username: {
          type: DataTypes.STRING,
          unique: true,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          unique: true,
          allowNull: false,
        },
        password_hash: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        created_at: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
          field: "created_at",
        },
        updated_at: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
          onUpdate: DataTypes.NOW,
          field: "updated_at",
        },
        is_active: {
          type: DataTypes.BOOLEAN,
          defaultValue: true,
        },
        role: {
          type: DataTypes.ENUM("admin", "user"),
          defaultValue: "user",
        },
      },
      {
        tableName: "users",
        timestamps: false,
      }
    );
  
    return User;
  };
  