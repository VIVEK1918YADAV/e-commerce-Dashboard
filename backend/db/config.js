// ./db/config.js
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://shubham12342019:shubh1234@cluster0.g1dgkgy.mongodb.net/?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch(err => console.error('MongoDB connection error:', err));

module.exports = mongoose.connection;