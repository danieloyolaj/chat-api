const db = require('../utils/database')
const { DataTypes } = require('sequelize')
const Users = require('./users.model')
const Conversations = require('./conversations.model')

//Model for the participants table
const Participants = db.define('participants', {
  idConversation:{
    type: DataTypes.UUID,
    allowNull: false,
    field: 'id_conversation',
    references: {
      key: 'id_conversation',
      model: Conversations
    }
  },
  idUser:{
    type: DataTypes.UUID,
    allowNull: false,
    field: 'id_user',
    references: {
      key: 'id_user',
      model: Users
    }
  }

})

module.exports = Participants