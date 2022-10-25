const postControllers = require('./posts.controllers')

const getAllPosts = (req, res) => {
  postControllers.getAllPosts()
    .then(data =>{
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}


const createPost = (req, res) => {
  const userId = req.user.id //Id of the logged user
  const { title, content, categoryId } = req.body
  if(title && content && categoryId) {
    postControllers.createPost({ title, content, userId, categoryId })
      .then(data => {
        res.status(201).json(data)
      })
      .catch(err=> {
        res.status(400).json(err.message)
      })
  }else{
    res.status(400).json({
    message: 'Missing data', 
    fields: {
      title: 'string',
      content: 'string',
      categoryId: 'uuid'
    }
  })
  }
}

const getPostsByCategory = (req, res) =>{
  const categoryId = req.params.id //get the id from the url
  postControllers.getPostsByCategory(categoryId)
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}

module.exports = {
  getAllPosts,
  createPost,
  getPostsByCategory
}