const Search = require('../models/Search');

const searchController = {};

searchController.index = (req, res, next) => {
  Search.search(req.body)
    .then(filters => {
      res.json({
        message: 'ok',
        results: { filters }
      });
    }).catch(next)
};

searchController.preSearch = (req, res, next) => {
  Search.preSearch(req.body)
    .then(filters => {
      res.json({
        message: 'ok',
        results: { filters }
      })
    })
}

module.exports = searchController;
