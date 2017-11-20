const FocusGroup = require('../models/FocusGroup');

const focusGroupController = {};

focusGroupController.index = (req, res, next) => {
  User.findAll()
    .then(users => {
      res.json({
        message: 'ok',
        data: { userdata },
      });
    }).catch(next)
};

FocusGroupController.show = (req, res, next) => {
  User.findById(req.params.id)
    .then(user => {
      res.json({
        message: 'ok',
        data: { user },
      });
    }).catch(next);
};

// FocusGroupController.create = (req, res, next) => {
//   User.create({
//     title: req.body.title,
//     description: req.body.description,
//     genre: req.body.genre,
//   }, req.user.id).then(movie => {
//     res.json({
//       message: 'New User added successfully!',
//       data: { user },
//     });
//   }).catch(next);
// };

focusGroupController.update = (req, res, next) => {
  User.update({
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

focusGroupController.delete = (req, res, next) => {
  Movie.destroy(req.params.id)
    .then(() => {
      res.json({
        message: 'User data deleted successfully!',
      });
    }).catch(next);
}

module.exports = focusGroupController;
