const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Blog extends Model {}

Blog.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        len: [1, 50],
      },
    },
    userId: {
      type: DataTypes.UUID,
      references: {
        model: "users",
        key: "id",
      },
    blog: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
      },
    }
    },
  },
  {
    sequelize,
    modelName: "blogs",
  }
);

module.exports = Blog;
