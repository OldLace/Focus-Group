
const clientProfile = require('../models/ClientProfile');


const clientProfileController = {};

clientProfileController.index = (req, res, next) => {
  clientProfile.findAll()
    .then(clients => {
      res.json({
        message: 'ok',
        clients: { clients },
      });
    }).catch(next)
};

clientProfileController.show = (req, res, next) => {
  clientProfile.findById(req.params.id)
    .then(user => {
      res.json({
        message: 'ok',
        client: { client },
      });
    }).catch(next);
};

clientProfileController.create = (req, res, next) => {
  clientProfile.create({
    age: req.body.bizname,
    sex: req.body.sex,
    height: req.body.height,
    weight: req.body.weight,
    income: req.body.income,
    street_address: req.body.street_address,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip
  },req.user.id).then(biz => {
    res.json({
      message: 'User Profile added!',
      client: { biz },
    });
  }).catch(next);
};

clientProfileController.update = (req, res, next) => {
  clientProfile.update({
    bizname: req.body.bizname,
    street_address: req.body.street_address,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    biz_description: req.body.biz_description,
    biz_url: req.body.biz_url,
  }, req.params.id).then(biz => {
    res.json({
      message: 'User Profile updated successfully!',
      client: { client },
    });
  }).catch(next);
};

clientProfileController.delete = (req, res, next) => {
  clientProfile.destroy(req.params.id)
    .then(() => {
      res.status(202).json({
        message: 'User Profile successfully deleted',
      });
    }).catch(next);
}



module.exports = clientProfileController;
