const mongoose = require('mongoose');
const dotenv = require('dotenv');

require('dotenv').config();

mongoose.connect(process.env.MONGODB_URL);

//creating schema for user

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});

//creating a model from the schema

const User = mongoose.model('User', userSchema);

module.exports = {
    User
};