const mongoose = require('mongoose');
const config = require('../../config/config.json');

// connect to mongodb
module.exports = (client) => {
    mongoose.connect(config.mongodb,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then (() => {
        console.log("Connected to MongoDB".blue);
    }).catch((err) => {
        console.log("Error connecting to MongoDB.".red);
        console.log(err);
    })

    console.log(`Connected as ${client.user.tag}`.green);
}