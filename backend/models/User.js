const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    speciality: String,
    puntuation: Number,
    lvl: Number,
    profileImg: String, 
    treat: Number,
    location: String,
    remote: Boolean
});


const User = mongoose.model('User', userSchema, 'Users');

module.exports = User;
