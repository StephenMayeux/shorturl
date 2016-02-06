var express = require('express');
var router = express.Router();
var URL = require('../models/url');
var validUrl = require('valid-url');

router.get('/*?', function(req, res, next) {
  // Check if valid URL
  if (validUrl.isUri(req.params[0])) {
    var numDocs = 0;
    URL.findAll({}, function(err, docs) {
      if (err) throw err;
      numDocs = docs.length + 1;
      var newURL = new URL({
        URL: req.params[0],
        number: numDocs
      });
      URL.saveURL(newURL, function(err, data) {
        if (err) throw err;
      });
      res.json({"original_url": req.params[0], "shortened_url": "https://stephenshorts.herokuapp.com/" + numDocs});
    });
  } else {
    res.json({"error": "This is not a valid URL. Please try again"});
  }
});

module.exports = router;
