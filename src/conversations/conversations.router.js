const router = require('express').Router()
const passport = require('passport')
const conversationsServices = require('./conversations.services')

require('../middlewares/auth.middleware')(passport)

//Root route
router.route('/')
  .get(passport.authenticate('jwt', {session: false},conversationsServices.getAllConversations))
  

//Dynamic routes by id
router.route('/:id')
  .post(passport.authenticate('jwt', {session: false}, conversationsServices.postConversation))
  .patch(passport.authenticate('jwt', {session: false}, conversationsServices.patchConversation))

  router.route('/:id/conversation_id')
    .get(passport.authenticate('jwt', {session: false}, conversationsServices.getAllConversationsById))

  module.exports = router