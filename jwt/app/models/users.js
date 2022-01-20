'use strict';

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    'users',
    {
      userName: {
        type:DataTypes.STRING,
        alloweNull: false,
        validate: {
          isAlpha: {
            msg: "El nombre solo puede contener letras"
          },
          len: {
            args: [2,255],
            msg: "Minimo 2 caracteres"
          }
        }
      },
      password: {
        type: DataTypes.STRING,
        alloweNull: false,
        validate: {
          len: {
            args: [6, 254],
            msg: "Minimo 6"
          }
        }
      },
      email: {
        type: DataTypes.STRING,
        alloweNull: false,
        unique: true,
        validate: {
          isEmail: {
            msg: "Debe ser un correo valido"
          }
        }
      }
      
    },
  );
  users.associate = function(models) {
    users.hasMany(models.posts, {as: "post", foreignKey: "usersId"})
  };
  return users;
};