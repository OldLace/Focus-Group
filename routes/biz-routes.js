const express = require('express');
const bizRoutes = express.Router();

const bizController = require('../controllers/bizprofile-controller');

bizRoutes.get('/', bizController.index);
bizRoutes.post('/', bizController.create);

bizRoutes.get('/:id', bizController.show);
bizRoutes.put('/:id', bizController.update);
bizRoutes.delete('/:id', bizController.delete);

module.exports = bizRoutes;