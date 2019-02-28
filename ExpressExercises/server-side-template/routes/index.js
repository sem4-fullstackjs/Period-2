var express = require("express");
var router = express.Router();
var jokes = require("../model/jokes");

/* GET home page. */
router.get("/", function(req, res, next) {
	res.render("index", { title: "Express", userName: req.session.userName });
});
router.get("/jokes", function(req, res, next) {
	if (req.session.jokesCounter) {
		req.session.jokesCounter += 1;
	} else {
		req.session.jokesCounter = 1;
	}
	res.render("jokes", {
		title: "Jokes",
		joke: jokes.getRandomJoke(),
		counter: req.session.jokesCounter
	});
});

router.get("/alljokes", function(req, res, next) {
	if (req.session.allJokesCounter) {
		req.session.allJokesCounter += 1;
	} else {
		req.session.allJokesCounter = 1;
	}
	res.render("alljokes", {
		title: "Jokes",
		jokes: jokes.getAllJokes(),
		counter: req.session.allJokesCounter
	});
});

router.get("/addjoke", function(req, res, next) {
	if (req.session.addJokeCounter) {
		req.session.addJokeCounter += 1;
	} else {
		req.session.addJokeCounter = 1;
	}
	res.render("addjoke", {
		title: "Add joke",
		jokes: jokes.getAllJokes(),
		counter: req.session.addJokeCounter
	});
});

router.get("/login", function(req, res, next) {
	res.render("login", {
		title: "Login page"
	});
});

module.exports = router;
