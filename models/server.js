const mongoose = require('mongoose');

const serverSchema = new mongoose.Schema({
    guildID: String,
    prefix: String,
    guildName: String,
})

const model = mongoose.model('server', serverSchema);

module.exports = model;