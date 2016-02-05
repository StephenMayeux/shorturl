var express = require('express');
var router = express.Router();
var URL = require('../models/url');
var validUrl = require('valid-url');

router.get('/*?', function(req, res, next) {
  if (validUrl.isUri(req.params[0])) {
    res.send('This is a valid URL');
  } else {
    res.send('This is not a valid URL');
  }
});

module.exports = router;
