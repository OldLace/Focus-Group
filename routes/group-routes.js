const express = require('express');
const groupRoutes = express.Router();

const groupsController = require('../controllers/groups-controller');

groupRoutes.post('/:id', groupsController.addToGroup)
groupRoutes.post('/', groupsController.create)
groupRoutes.get('/:id', groupsController.index)
groupRoutes.delete('/', groupsController.removeFromGroup)
groupRoutes.delete('/:id', groupsController.destroyGroup)
module.exports = groupRoutes
