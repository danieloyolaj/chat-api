const router = require('express').Router()
const categoryServices = require('./categories.services')
const { getPostsByCategory } = require('../posts/posts.services')


router.route('/') // /categories
  .get(categoryServices.getAllCategories)
  .post(categoryServices.postCategory)

router.get('/:id', categoryServices.getCategoryById) 

router.get('/:id/posts', getPostsByCategory)

module.exports = router