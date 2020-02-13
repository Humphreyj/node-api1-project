const express = require('express');
const data =  require('./data/db');
var cors = require('cors')

const port = 5000;

const server = express();
server.use(express.json());
server.use(cors());

//Get Users
server.get('/users/',(req, res) => {
    data.find()
    .then(response => { 
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json({err: "Something messed up. Sorry."})
    })
})
//Get users by Id
server.get(`/users/:id`, (req, res) => {
    const {id} = req.params;
    data.findById(id).then(response => {
       if(response) {
           res.status(200).json(response)
       }else {
           res.status(404).json({message: 'The user does not exist.'})
       }
    })
    .catch(err => {
        res.status(500).json({err,err: "The information could not be retrieved."})
    })

})

//Add a new user
server.post('/users', (req, res) => {
    const {name, bio} = req.body;

    if(!name || !bio) {
        res.status(400).json({error: 'You must have a name and bio for the user!'})
    }else {
        data.insert(req.body)
        .then(response => {
            res.status(201).json(response)
        })
        .catch(err => {
            res.status(500).json({error: 'There was a dang server error!'})
        })
    }

    res.status(201).json({url: '/users', operation: 'POST'})
})
//Delete User

server.delete('/users/:id', (req, res) => {
    const {id} = req.params;
    data.remove(id)
    .then(response => {
        if(response && response > 0) {
            res.status(200).json({
                message: 'The user has been terminated.'
            })
        }else {
            res.status(404).json({
                message: 'The user may have already been terminated.'
            })
        }
    })
    .catch(err => {
        res.status(500).json({err,err: 'The user could not be terminated.'})
    })
})

//Edit user

server.put('/users/:id', (req, res) => {
    const { name, bio } = req.body;
    const { id } =  req.params;
    if(!name || !bio) {
        res.status(400).json({error: "please provide a name and bio for the user"})
    }else {
        data.update(id, req.body)
        .then(response => {
            if(response) {
                res.status(200).json(req.body)
            }else {
                res.status(404).json({
                    message: 'The user with that ID does not exist.'
                });
            }
        })
        .catch(err => {
            res.status(500).json({err,err: "The user could not be updated."})
        })
    }
})







server.listen(port, () => {
    console.log(`server is runnin' on port ${port}`)
})