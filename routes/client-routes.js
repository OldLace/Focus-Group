const express = require('express');
const clientRoutes = express.Router();

const clientController = require('../controllers/clientprofile-controller');

clientRoutes.get('/', clientController.index);
clientRoutes.post('/', clientController.create);
clientRoutes.put('/', clientController.update);

clientRoutes.get('/:id', clientController.show);
clientRoutes.delete('/:id', clientController.delete);

module.exports = clientRoutes;
