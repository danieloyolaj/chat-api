const participantsModel = require('../models/participants.model')
const uuid = require('uuid')

// const Participants = require('../models/participants.model')
const uuid = require('uuid')

//Controller for getting participants from a conversation
//If id does not work, add a parameter with the relation of the model
const getParticipantsByConversation = async (id) => {
  const data = await participantsModel.findAll({
    where: {id}
  })
  return data
}

//Controller for adding participants to a conversation
//Ask this to the teacher
const addParticipantsToConversation = async (id) => {
  const newParticipant = await participantsModel.findOne({
    where: {id}
  })
  return newParticipant
}

//Controller for getting one specific participant from a conversation
const getParticipantById = async (id) => {
  const data = await participantsModel.findOne({
    where: {id}
  })
  return data
}

//Controller for deleting participants from a conversation
const deleteParticipantFromConversation = async (id) => {
  const data = await participantsModel.destroy(data, { where: {id} })
  return data
}

module.exports = {
  getParticipantsByConversation,
  addParticipantsToConversation,
  getParticipantById,
  deleteParticipantFromConversation
}