const db = require('../utils/database')
const { DataTypes } = require('sequelize')
const Users = require('./users.model')
const Conversations = require('./conversations.model')

//Model for the userCategories table
const Messages = db.define('user_categories', {
  idMessage:{
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
    field: 'id_message'
  },
  senderId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: 'sender_id',
    references: {
      key: 'id_user',
      model: Users
    }
  },
  conversationId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: 'conversation_id',
    references: {
      key: 'id_conversation',
      model: Conversations
    }
  },
  message:{
    type: DataTypes.STRING,
    allowNull: false
  }
})

module.exports = Messages