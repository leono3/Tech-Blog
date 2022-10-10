const Blog = require("./Blog");
const User = require("./User");
const Comment = require("./Comment");

// Blog/User associations
User.hasMany(Blog, {
  foreignKey: "userId",
});

Blog.belongsTo(User, {
  foreignKey: "userId",
});

// Blog/Comment associations
Blog.hasMany(Comment, {
  foreignKey: "blogId",
  onDelete: "CASCADE",
});

Comment.belongsTo(Blog, {
  foreignKey: "blogId",
  as: "blogComments",
  onDelete: "CASCADE",
});

// User/Comment associations
User.hasMany(Comment, {
  foreignKey: "userId",
});

Comment.belongsTo(User, {
  foreignKey: "userId",
});

module.exports = {
  Blog,
  User,
  Comment,
};
