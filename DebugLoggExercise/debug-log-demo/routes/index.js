var express = require('express');
var router = express.Router();
var debug = require('debug')('debug-log-demo:route-index');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  debug('In index.js');
});

module.exports = router;
