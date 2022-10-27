const messagesControllers = require('./messages.controllers')
const { host } = require('../config')


//Service for getting all the messages
const getAllMessages = (req, res) => {
  
  //Handling pagination
  const offset = Number(req.query.offset) || 0
  const limit = Number(req.query.limit) || 10
  const urlBase = `${host}/api/v1/messages`
  
  messagesControllers.getAllMessages(offset, limit)
    .then(data => {
      const nextPage = data.count - offset >= limit ? `${urlBase}?offset=${offset + limit}&limit=${limit}` : null
      const prevPage = offset - limit >= 0 ? `${urlBase}?offset=${offset - limit}&limit=${limit}` : null
      res.status(200).json({
        next: nextPage,
        prev: prevPage,
        items: data.count,
        offset,
        limit,
        results: data.rows
      })
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}

//Service for getting a message by its id
const getMessageById = (req, res) => {
  const id = req.params.id
  messagesControllers.getMessageById(id)
    .then(data => {
      if(data){
        res.status(200).json(data)
      }else{
        res.status(404).json({message: 'Invalid ID'})
      }
    })
    .catch(err => {
      res.status(404).json({message: err.message})
    })
}

//Service for posting (creating) a message
const postMessage = (req, res) => {
  const userId = req.user.id //Id of the logged user
  const { senderId, conversationId, message } = req.body
  if(senderId && conversationId && message){
    messagesControllers.createMessage({ senderId, conversationId, message })
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        res.status(400).json(err.message)
      })
  }else{
    res.status(400).json({
      message: 'Missing data',
      fields: {
        senderId: 'uuid',
        conversationId: 'uuid',
        message: 'string'
      }
    })
  }
}

//Service for updating a message
const patchMessage = (req, res) => {
  const id = req.params.id
  const { senderId, conversationId, message } = req.body
  messagesControllers.updateMessage(id, {senderId, conversationId, message})
    .then(data => {
      if(data[0]){
        res.status(200).json({message: 'Message updated successfully!'})
      }else{
        res.status(404).json({message: 'Invalid ID.'})
      }
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}

//Service for deleting a message
const deleteMessage = (req, res) => {
  const id = req.params.id
  messagesControllers.deleteMessage(id)
    .then(data => {
      if(data){
        res.status(204).json()
      }else{
        res.status(404).json({message: 'Invalid ID'})
      }
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}

module.exports = {
  getAllMessages,
  getMessageById,
  postMessage,
  patchMessage,
  deleteMessage
}