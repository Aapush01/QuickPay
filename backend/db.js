const mongoose = require('mongoose');
const dotenv = require('dotenv');

require('dotenv').config();

mongoose.connect(process.env.MONGODB_URL);
const db = mongoose.connection;

db.on('connected', () => {
    console.log("Mongoose connected to MongoDB");
});

db.on('error', (err) => {
    console.log(`Monogoose connection error: ${err}`);
});

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

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

//creating a model from the schema
const Account = mongoose.model('Account', accountSchema);
const User = mongoose.model('User', userSchema);

module.exports = {
    User,
    Account
};