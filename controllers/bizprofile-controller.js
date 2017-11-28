const BizProfile = require('../models/BizProfile');
const Group = require('../models/Groups')

const bizProfileController = {};

bizProfileController.index = (req, res, next) => {
  BizProfile.findAll()
    .then(bizs => {
      res.json({
        message: 'ok',
        bizs: { bizs },
      });
    }).catch(next)
};

bizProfileController.show = (req, res, next) => {
  BizProfile.findById(req.params.id)
    .then(biz => {
      res.json({
        message: 'ok',
        biz: { biz },
      });
    }).catch(next);
};

bizProfileController.create = (req, res, next) => {
  BizProfile.create({
      bizname: req.body.bizname,
      street_address: req.body.street_address,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip,
      biz_description: req.body.biz_description,
      biz_url: req.body.biz_url
    }, req.user.id)
  .then(biz => {
    res.json({
      message: 'Business added!',
      biz: { biz },
    });
  }).catch(next);
};

bizProfileController.update = (req, res, next) => {
  BizProfile.update({
    bizname: req.body.bizname,
    street_address: req.body.street_address,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    biz_description: req.body.biz_description,
    biz_url: req.body.biz_url,
  }, req.user.id).then(biz => {
    res.json({
      message: 'Business updated successfully!',
      biz: { biz },
    });
  }).catch(next);
};

bizProfileController.delete = (req, res, next) => {
  BizProfile.destroy(req.params.id)
    .then(() => {
      res.status(202).json({
        message: 'Business successfully deleted',
      });
    }).catch(next);
};

module.exports = bizProfileController;
