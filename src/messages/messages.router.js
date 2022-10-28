const router = require('express').Router()
const passport = require('passport')
const messagesServices = require('./messages.services')
require('../middlewares/auth.middleware')(passport)

//Root route
router.route('/')
  .get(messagesServices.getAllMessages)
  .post(passport.authenticate('jwt', {session: false}), messagesServices.postMessage)

//Dynamic protected routes by id
router.route('/:id')
  .get(passport.authenticate('jwt', {session: false}), messagesServices.getMessageById)
  .patch(passport.authenticate('jwt', {session: false}), messagesServices.patchMessage)
  .delete(passport.authenticate('jwt', {session: false}), messagesServices.deleteMessage)



module.exports = router