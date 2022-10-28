const router = require('express').Router()
const passport = require('passport')
const participantsServices = require('./participants.services')
require('../middlewares/auth.middleware')(passport)

//Root route
router.route('/:conversation_id/participants')
  .get(passport.authenticate('jwt', {session: false}), participantsServices.getParticipantsByConversation)

router.route('/:conversation_id/')
  .get(passport.authenticate('jwt', {session:false}), participantsServices.getParticipantById)
  .delete(passport.authenticate('jwt', {session:false}), participantsServices.deleteParticipantFromConversation)

module.exports = router