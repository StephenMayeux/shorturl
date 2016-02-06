var express = require('express');
var router = express.Router();
var URL = require('../models/url');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/:id', function(req, res, next) {
  URL.findAll({number: req.params.id}, function(err, docs) {
    if (err) throw err;
    if (docs.length) {
      res.redirect(docs[0].URL);
    } else {
      res.send('This short URL does not exist.');
    }
  });
});

module.exports = router;
