const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../lib/dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class Post extends Model {}
// Sequelize will create this table if it doesn't exist on startup
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      unique: true,
      defaultValue: function () {
        return this.title
          ? this.title.toLowerCase().replace(/\s+/g, "-")
          : null;
      },
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      required: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
      required: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
      },
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "posts",
    timestamps: true,
    freezeTableName: true,
  }
);
module.exports = Post;
