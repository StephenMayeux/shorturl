var mongoose = require('mongoose');

//schema
var URLSchema = mongoose.Schema({
  URL: String,
  number: Number
});

var URL = module.exports = mongoose.model('URL', URLSchema);
