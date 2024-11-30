const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../lib/dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class Comment extends Model {}
// Sequelize will create this table if it doesn't exist on startup
Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      required: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
      },
    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "posts",
      },
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "comments",
    timestamps: true,
    freezeTableName: true,
  }
);
module.exports = Comment;
