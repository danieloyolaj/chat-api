const db = require('../utils/database')
const { DataTypes } = require('sequelize')
const Users = require('./users.model')
const Conversations = require('./conversations.model')

//Model for the participants table
const Participants = db.define('participants', {
  id:{
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
    references: {
      key: 'id',
      model: Conversations
    }
  },
  idUser:{
    type: DataTypes.UUID,
    allowNull: false,
    field: 'id_user',
    references: {
      key: 'id',
      model: Users
    }
  }

})

module.exports = Participants