const db = require('../utils/database')
const { DataTypes } = require('sequelize')
const Users = require('./users.model')

const Conversations = db.define('categories', {
  idConversation:{
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
    field: 'id_conversation'
  },
  title:{
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'image_url'
  },
  createBy:{
    type: DataTypes.UUID,
    allowNull: false,
    field: 'created_by',
    references: {
      key: 'id_user',
      model: Users
    }
  },
  createdAt:{
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
    field: 'created_at'
  },
  updatedAt:{
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
    field: 'updated_at'
  }
  
}, {
  timestamps: false //Avoids sequelize to add columns createdAt and updatedAt
})

module.exports = Conversations