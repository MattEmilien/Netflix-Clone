const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, // Assuming email addresses should be unique
    },
    phone: {
        type: String,
    },
    address: {
        type: String,
    },
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    gender: {
        type: String,
        enum: ['Male', 'Female']
    },
    movies: {
        type: Array,
        default: []
    },
});

module.exports = mongoose.model('User', userSchema);