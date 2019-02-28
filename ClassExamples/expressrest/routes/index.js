var express = require('express');
var router = express.Router();

var model = {
  title: "Site with a simple JOKE API",
  howToUse: "/api/random"
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', model);
});

router.get('/add', function(req, res, next) {
  res.render('addJoke');
});

module.exports = router;
