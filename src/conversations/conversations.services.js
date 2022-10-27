const conversationsControllers = require('./conversations.controllers')

//Service for getting all the conversations 
const getAllConversations = (req, res) => {
  conversationsControllers.getAllConversations()
    .then((response) =>{
      res.status(200).json(response)
    })
    .catch((err) =>{
      res.status(400).json({message: err.message})
    })
}

//Service for getting one conversation
const getAllConversationsById = (req, res) => {
  const id = req.params.id
  conversationsControllers.getConversationById(id)
    .then((data) => {
      res.status(200).json(data)
    })
    .catch((err) => {
      res.status(404).json({message: err.message})
    })
}

//Service for creating a conversation
const postConversation = (req, res) => {
  const { title, imageUrl, createBy } = req.body
  if(title && imageUrl && createBy){
    conversationsControllers.createConversation({ title, imageUrl, createBy })
      .then(data => {
        res.status(201).json(data)
      })
      .catch(err => {
        res.status(400).json(err.message)
      })
  }else{
    res.status(400).json({message: 'Missing data. Required fields:', fields:{
      title: 'string',
      imageUrl: 'string',
      createBy: 'uuid'
    }})
  }
}

//Service for updating a conversation
const patchConversation = (req, res) => {
  const { title, imageUrl, createBy } = req.body
  conversationsControllers.updateConversation(id, { title, imageUrl, createBy })
    .then(data => {
      if(data[0]){
        res.status(404).json({message: 'User updated successfully.'})
      }else{
        res.status(404).json({message: 'Invalid ID'})
      }
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}

module.exports = {
  getAllConversations,
  getAllConversationsById,
  postConversation,
  patchConversation
}