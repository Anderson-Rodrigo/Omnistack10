const {Router} = require('express')
const DevController = require('./models/controllers/DevController')
const SerchController = require('./models/controllers/SearchController')

const routes = Router()

routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store)

routes.get('/search', SerchController.index)

module.exports = routes