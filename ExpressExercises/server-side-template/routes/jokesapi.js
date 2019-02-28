var express = require("express");
var router = express.Router();
var jokes = require("../model/jokes");

router.get("/jokes/random", function(req, res, next) {
	res.send(jokes.getRandomJoke());
});

router.get("/jokes", function(req, res, next) {
	//console.log(req.baseUrl.startsWith("/api"));
	res.send(jokes.getAllJokes());
});

router.post("/joke/:joke", function(req, res, next) {
	res.send(jokes.addJoke(req.params.joke));
});

module.exports = router;
