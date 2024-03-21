const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
name: String,
arrival_date: Date,
departure_date: Date,
rooms: String,
guests: String,
email: String,
contact: Number,
message: String
})

const UserModel = mongoose.model("users",UserSchema)
module.exports = UserModel
