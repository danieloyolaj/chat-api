#CHAT API

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
# ROUTES
  /api/v1/users
  /api/v1/users/:id
  /api/v1/users/me
  
  #### /api/v1/conversations
  
    - This route shows the conversations with a logged user
    - This is a protected route

  #### /api/v1/conversations/:id_conversation
    - This route shows a specific conversation
    - This allows to update and delete conversation
    - This is a protected route

  #### /api/v1/conversations/:id_conversation/messages
    - This route shows all the messages from a conversation
    - This allows to create new messages
    - This is a protected route

  #### /api/v1/conversations/:id_conversation/messages/:id_message
    - This route shows a specific message
    - It can delete a message, but not update it
    - This is a protected route

  #### /api/v1/conversations/:id_conversation/participants
    - This route shows the participants from a conversation
    - It allows to add new participants to the conversation
    - This is a protected route

  #### /api/v1/conversations/:id_conversation/participants/:id_participant
    - This route shows a specific participant from a conversation
    - It allows to delete participants from the conversation
    - This is a protected route