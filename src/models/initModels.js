//This file handles the relations between tables

const Users = require('./users.model')
const Conversations = require('./conversations.model')
const Participants = require('./participants.model')
const Messages = require('./messages.model')

//Relations between tables
const initModels = () => {
  Messages.belongsTo(Users)
  Users.hasMany(Messages)

  Messages.belongsTo(Conversations)
  Conversations.hasMany(Messages)

  Conversations.belongsTo(Users)
  Users.hasMany(Conversations)

  Participants.hasMany(Users)
  Users.belongsTo(Participants)
  
}


module.exports = initModels 