const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const UsersControler = require('./controllers/UsersController')

const app = express()
const port = 8787
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

UsersControler.RegisterRoutes(app)

// app.get('/users', (request, response) => {
//     console.log('get users')
//     response.send(users)
// })

// app.get('/users/:id', (request, response) =>{
//     console.log('get users by id')
//     let user = users.find(user => user.id === parseInt(request.params.id))
//     response.send(user)
// })

// app.post('/users', (request, response) => {
//     console.log("Post")
//     let requestBody = request.body
//     users.push({
//         id: requestBody.id,
//         nick: requestBody.nick,
//         score: requestBody.score
//     })

//     response.send(users)
// })

// app.delete('/users/:id', (request, response) => {
//     console.log('delete')
//     let userIdToDelete = parseInt(request.params.id)
//     let userIndexToDelete = users.findIndex(user => user.id === userIdToDelete)

//     users.splice(userIndexToDelete, 1)

//     response.send('Successfuly deleted user with id ${ userIdToDelete }')

// })

app.listen(port)