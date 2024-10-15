const mongoose = require('mongoose');

const person_detail = new mongoose.Schema({
    name: {
        type: String, // Corrected the type to String without quotes
        required: true, // Changed 'require' to 'required'
    },
    username: {
        type: String,
        required: true, 
    },
    password: {
        type: String, 
        required: true 
    }
});

const Person = mongoose.model('Person', person_detail); // Model name should be capitalized

module.exports = Person;
