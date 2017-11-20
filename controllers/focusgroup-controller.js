const FocusGroup = require('../models/FocusGroup');

const focusGroupController = {};

focusGroupController.index = (req, res, next) => {
  FocusGroup.findAll()
    .then(users => {
      res.json({
        message: 'ok',
        data: { userdata },
      });
    }).catch(next)
};

FocusGroupController.show = (req, res, next) => {
  FocusGroup.findById(req.params.id)
    .then(user => {
      res.json({
        message: 'ok',
        data: { user },
      });
    }).catch(next);
};


focusGroupController.update = (req, res, next) => {
  FocusGroup.update({
    title: req.body.title,
    description: req.body.description,
    genre: req.body.genre,
  }, req.params.id).then(user => {
    res.json({
      message: 'User Profile updated successfully!',
      data: { userdata },
    });
  }).catch(next);
};


module.exports = focusGroupController;
