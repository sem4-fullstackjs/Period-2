var express = require('express');
var router = express.Router();
var jokes = require("../model/jokes");

/* GET apis listing. */
router.get('/random', function(req, res, next) {
  res.json(jokes.getRandomJoke())
});

router.get("/alljokes", function(req, res, next) {
  res.send();
});

router.get("/addJoke", function(req, res, next) {
  res.send();
});

router.get('/error', function(req, res, next) {
  if (true) {
    var err = new Error("Error!!!")
    err.isJson = true;
    return next(err)
  }
  res.json(jokes.getRandomJoke())
});


module.exports = router;
