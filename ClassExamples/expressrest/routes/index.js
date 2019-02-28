var express = require('express');
var router = express.Router();
var jokes = require("../model/jokes");

var model = {
  title: "Site with a simple JOKE API",
  howToUse: "/api/random"
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', model);
});

router.get('/alljokes', function(req, res, next) {
  res.render("alljokes", {
    title: "Jokes",
    jokes: jokes.getAllJokes(),
  })
})

router.get('/addJoke', function(req, res, next) {
  res.render('addJoke');
});


module.exports = router;
