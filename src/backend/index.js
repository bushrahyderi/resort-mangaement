const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')

const app = express()
const port = 3001
app.use(cors())
app.use(express.json())

// 'mongodb+srv://bushra:bushra@resort-management.7pofop4.mongodb.net/crud'

mongoose.connect('mongodb+srv://bushra:bushra@resort-management.7pofop4.mongodb.net/Crud')


app.get('/users',(req,res)=>{
  UserModel.find({})
  .then(users=> res.json(users))
  .catch(err => res.json(err))
})

app.get('/getUser/:id',(req, res)=> {
  const id = req.params.id;
  UserModel.findById({_id:id})
  .then(users => res.json(users))
  .catch(err => res.json(err))
})

app.put('/updateuser/:id', (req,res) =>{
  const id = req.params.id;
  UserModel.findByIdAndUpdate({_id:id}, 
    {name: req.body.name,
    arrival_date: req.body.arrival_date,
    departure_date: req.body.departure_date,
    rooms: req.body.rooms,
    guests: req.body.guests,
    email: req.body.email,
    contact: req.body.contact,
    message: req.body.message
  })
  .then(users => res.json(users))
  .catch(err => res.json(err))
})

app.delete('/deleteuser/:id', (req,res) =>{
  const id = req.params.id;
  UserModel.findByIdAndDelete({_id:id})
  .then(res => res.json(res))
  .catch(err => res.json(err))

})



app.post("/booknow", (req,res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.listen(port, () => {
  console.log('Server is running')
})

