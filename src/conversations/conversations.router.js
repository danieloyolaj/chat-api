const router = require('express').Router()
const passport = require('passport')
const conversationsServices = require('./conversations.services')

require('../middlewares/auth.middleware')(passport)

//Root route
router.route('/')
  .get(passport.authenticate('jwt', {session: false}),conversationsServices.getAllConversations)
  .post(passport.authenticate('jwt', {session: false}), conversationsServices.postConversation)

//Dynamic routes by id
//If this fails, look at the router.get('/:id/posts', getPostsByCategory) in the chefcito project
router.route('/:id')
  
  .patch(passport.authenticate('jwt', {session: false}), conversationsServices.patchConversation)

  router.route('/:id/conversation_id')
    .get(passport.authenticate('jwt', {session: false}), conversationsServices.getAllConversationsById)

  module.exports = router