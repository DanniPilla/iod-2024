const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../lib/dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class Like extends Model {}
// Sequelize will create this table if it doesn't exist on startup
Like.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
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
    modelName: "likes",
    timestamps: true,
    freezeTableName: true,
  }
);
module.exports = Like;
