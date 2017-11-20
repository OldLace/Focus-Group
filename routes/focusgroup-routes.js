const express = require('express');
const focusGroupRoutes = express.Router();

const focusGroupController = require('../controllers/focusgroup-controller');

focusGroupRoutes.get('/', focusGroupController.index);
focusGroupRoutes.post('/',  focusGroupController.create);

focusGroupRoutes.get('/:id', focusGroupController.show);
focusGroupRoutes.put('/:id', focusGroupController.update);

module.exports = focusGroupRoutes;
