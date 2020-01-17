const mongoose = require('mongoose')

const DevSchema = new mongoose.Schema({
    nome: String,
    github_userName: String,
    biografia: String,
    avatar_url: String,
    techs: [String]
})

module.exports = mongoose.model('Dev', DevSchema)