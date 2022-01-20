'use strict';

module.exports = (sequelize, DataTypes) => {
  const posts = sequelize.define(
    'posts',
    {
      userId: DataTypes.INTEGER,
      title: DataTypes.STRING,
      body: DataTypes.TEXT,
    })
  posts.associate = function(models) {
    posts.belongsTo(models.Users, { as: 'author', foreignKey: 'usersId'})
  };
  return posts;
};