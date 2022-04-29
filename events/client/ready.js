const mongoose = require('mongoose');
require('dotenv').config();

// connect to mongodb
module.exports = (client) => {
    mongoose.connect(process.env.DB_LINK,{
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