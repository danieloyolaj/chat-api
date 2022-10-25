#CHAT API
- Frontend
  - Get all chats
  - Get one chat
  - Get all chats of a specific user
  - Get all chats that I created
  - Get all categories
  - Paginate chats
  - CRUD actions for chats, categories

```json
    { 
      "total": 68,
      "prev": "localhost:9000/api/v1/chats?start=51&limit=60",
      "next": "localhost:9000/api/v1/chats?start=61&limit=68",
      "data": [{
        "id": "1",
        "title": "Example Post",
        "content": "Lorem Ips",
        "createdBy": {
          "id":"18",
          "name":"Daniel",
          "email":"daniel@daniel.com"
        },
        "category": {
          "id":"2",
          "name":"Technology"
        }
      }]
    }
```
ROUTES
  /api/v1

  /users
    - /me
    - /me/posts
    - /me/posts/:id
    - /:id

  /categories
    - /:id
    - /:id/posts

  /posts
    - /:id