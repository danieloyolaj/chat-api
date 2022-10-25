const Posts = require('../models/posts.models')
const uuid = require('uuid')
const Users = require('../models/users.models')
const Categories = require('../models/categories.models')


const getAllPosts = async () => {
  const data = await Posts.findAll({
    attributes:['id', 'title', 'content'],
    
    //This will join two tables
    include:[
      {
          model: Users,
          as: 'user',
          attributes:['id', 'firstName', 'lastName', 'email']
      },
      {
          model: Categories,
          attributes: {
              exclude: ['id']
          }
      }
  ]
  
  }) 
  return data
}

const getPostById = async (id) => {
  const data = await Posts.findOne({
    where: { id },
    attributes:['id', 'title', 'content'],
    
    //This will join two tables
    include:[
      {
          model: Users,
          as: 'user',
          attributes:['id', 'firstName', 'lastName', 'email']
      },
      {
          model: Categories,
          attributes: {
              exclude: ['id']
          }
      }
  ]
  
  }) 
  return data
}

const createPost = async (data) => {
  const response = await Posts.create({
    id: uuid.v4(),
    title: data.title,
    content: data.content,
    userId: data.userId, //UserId that comes from the token
    categoryId: data.categoryId
  })
  return response
}

const getPostsByCategory = async (categoryId) => {
  const data = await Posts.findAll({
    where: { categoryId }
  })
  return data
}

module.exports = {
  getAllPosts, 
  getPostById,
  createPost,
  getPostsByCategory
}