const participantsControllers = require('./participants.controllers')

//Service for getting a participant by conversation
const getParticipantsByConversation = (req, res) => {
  participantsControllers.getParticipantsByConversation()
    .then((response) =>{
      res.status(200).json(response)
    }) 
    .catch((err) => {
      res.status(400).json({message: err.message})
    })
}

//Service for adding a participant to a conversation
const postParticipantsToConversation = (req, res) => {

}

//Service for getting a participant by id
const getParticipantById = (req, res) => {
  const id = req.params.id
  participantsControllers.getParticipantById(id)
  .then((data) => {
    res.status(200).json(data)
  })
  .catch((err) => {
    res.status(400).json({message: err.message})
  })
}

//Service for deleting a participant from a conversation
const deleteParticipantFromConversation = (res, req) => {
  const id = req.params.id
  participantsControllers.deleteParticipantFromConversation(id)
    .then(data => {
      if(data){
        res.status(204).json()
      }else{
        res.status(404).json({message: 'Invalid ID.'})
      }
    })
    .catch(err =>{
      res.status(400).json({message: err.message})
    })
}

module.exports = {
  getParticipantsByConversation,
  postParticipantsToConversation,
  getParticipantById,
  deleteParticipantFromConversation
}