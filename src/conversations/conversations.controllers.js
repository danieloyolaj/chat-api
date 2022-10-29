const conversationsModel = require('../models/conversations.model')
const uuid = require('uuid')
const Users = require('../models/users.model')
const Messages = require('../models/messages.model')

//Controller for getting all conversations from one specific user
const getAllConversations = async () => {
  const data = await conversationsModel.findAll({ 
    // where: {id},
    include:[
      {
        model: Users,
        as: 'user',
        attributes:['firstName', 'lastName', 'email']
      },
      {
        model: Messages,
        as: 'messages',
        attributes:['message']
      }
    ]
  })
  return data
}

//Controller for getting one conversation by its id
const getConversationById = async (id) => {
  const data = await conversationsModel.findOne({ where: {id}})
  return data
}

//Controller for creating a conversation
const createConversation = async (data) => {
  const response = await conversationsModel.create({
    id: uuid.v4(),
    title: data.title,
    imageUrl: data.imageUrl,
    createdBy: data.createdBy
  })
  return response
}

//Controller for updating a conversation
const updateConversation = async (id, data) => {
  const result = await conversationsModel.update(data, { where: {id} })
  return result
}

module.exports = {
  getAllConversations,
  getConversationById,
  createConversation,
  updateConversation
}