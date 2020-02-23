const util = require('util')
const MongoDBService = require('../services/MongoDBService')
const ObjectID = require('mongodb').ObjectId
class UsersController{
    constructor(request, response){
        this.request = request
        this.response = response

        this.MongoDBService = new MongoDBService('mongodb://root:sifra@localhost:27017', 
                                                'MongoBase_project_database')
    }

    static RegisterRoutes(app){
        app.get('/users', (req, res) => {
            new UsersController(req, res).getUsers()
        })

        app.get('/users/:id', (req, res) => {
            new UsersController(req, res).getUser()
        })

        app.post('/users', (req, res) => {
            new UsersController(req, res).postUsers()
        })

        app.put('/users', (req, res) => {
            new UsersController(req, res).putUser()
        })

        app.delete('/users', (req, res) => {
            new UsersController(req, res).deleteUser()
        })
    }

    async getUsers(){
        await this.MongoDBService.connect()

        let users = await this.MongoDBService.find('users')

        this.MongoDBService.disconnect()
        this.response.send(users)
    }

    async getUser(){
        await this.MongoDBService.connect()

        let user = await this.MongoDBService.findOne('users', {id: ObjectID(this.request.params.id)})

        await this.MongoDBService.disconnect()
        this.response.send(user)
    }

    async postUsers(){
        await this.MongoDBService.connect()


        await this.MongoDBService.insert('users', {
            id: this.request.body.id,
            nick: this.request.body.nick,
            score: this.request.body.score
        })

        this.MongoDBService.disconnect()
        this.response.json({status: 'Success'})
    }

    async putUser() {
        await this.mongoDBService.connect();
    
        await this.mongoDBService.update('users', { _id: ObjectId(this.request.params.id) }, {
          nick: this.request.body.nick,
          score: this.request.body.score
        });
    
        this.mongoDBService.disconnect();
        this.response.json({ status: 'Success' });
      }
    
      async deleteUser() {
        await this.mongoDBService.connect();
        await this.mongoDBService.delete('users', { _id: ObjectId(this.request.params.id) } );
    
        this.mongoDBService.disconnect();
        this.response.json({ status: 'Success' });
      }

}

module.exports = UsersController
