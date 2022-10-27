const Messages = require('../models/messages.model')
const uuid = require('uuid')

//Gets all messages 
const getAllMessages = async() => {
  const data = await Messages.findAndCountAll({
    //Pagination
    offset: offset,
    limit: limit
  })
  return data
}

//Get one message by id
const getMessageById = async(id) => {
  const data = await Messages.findOne({
    where: {id}
  })
  return data
}

//Create a message
const createMessage = async(data) => {
  const response = await Messages.create({
    id: uuid.v4(),
    senderId: data.senderId,
    conversationId: data.conversationId,
    message: data.message
  })
  return response 
}

//Update a message
const updateMessage = async(id, data) => {
  const result = await Messages.update(data, { where: {id}})
  return result
}

//Detele a message
const deleteMessage = async(id) => {
  const data = await Messages.destroy(data, { where: {id} 
  })
  return data
}

module.exports = {
  getAllMessages,
  getMessageById,
  createMessage,
  updateMessage,
  deleteMessage
}