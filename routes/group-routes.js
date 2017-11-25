const express = require('express');
const groupRoutes = express.Router();

const bizController = require('../controllers/bizprofile-controller');

groupRoutes.post('/:id', bizController.addToGroup)
groupRoutes.post('/', bizController.createGroup)
groupRoutes.get('/:id', bizController.groupIndex)

module.exports = groupRoutes
