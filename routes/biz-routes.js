const express = require('express');
const bizRoutes = express.Router();

const bizController = require('../controllers/bizprofile-controller');
const searchController = require('../controllers/search-controller')

bizRoutes.post('/search', searchController.index);

bizRoutes.get('/', bizController.index);
bizRoutes.post('/', bizController.create);
// bizRoutes.post('/groups/:id', bizController.addUser)

bizRoutes.get('/:id', bizController.show);
bizRoutes.put('/', bizController.update);
bizRoutes.delete('/:id', bizController.delete);

module.exports = bizRoutes;
