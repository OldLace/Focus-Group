const UserProfile = require('../models/FocusGroup');
const FocusGroupController = {};

FocusGroupController.index = (req, res, next) => {
  UserProfile.findAll()
    .then(users => {
      res.json({
        message: 'ok',
        data: { users },
      });
    }).catch(next)
};

FocusGroupController.show = (req, res, next) => {
  UserProfile.findById(req.params.id)
    .then(user => {
      res.json({
        message: 'ok',
        data: { user },
      });
    }).catch(next);
};

// FocusGroupController.create = (req, res, next) => {
//   console.log(req.user)

// }

FocusGroupController.update = (req, res, next) => {
  UserProfile.update({
    title: req.body.title,
    description: req.body.description,
    genre: req.body.genre,
  }, req.params.id).then(user => {
    res.json({
      message: 'User Profile updated successfully!',
      data: { user },
    });
  }).catch(next);
};


module.exports = FocusGroupController;
