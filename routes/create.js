var express = require('express');
var router = express.Router();
var URL = require('../models/url');

router.get('/*?', function(req, res, next) {
  res.send(req.params[0]);
});

module.exports = router;
