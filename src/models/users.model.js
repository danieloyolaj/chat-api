const db = require('../utils/database')
const { DataTypes } = require('sequelize')

//Model has to be in Uppercase and in plural form
const Users = db.define('users', {
    idUser: {
      primaryKey: true,
      type: DataTypes.UUID,
      allowNull: false,
      field: 'id_user'
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'first_name'
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'last_name'
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
		unique: true,
			validate: {
			isEmail: true
		}
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profileImage: {
      type: DataTypes.STRING,
			allowNull: false,
      field: 'profile_image'
    },
    phone: {
			type: DataTypes.STRING(16),
			allowNull: false,
			unique: true
    }
})

module.exports = Users