var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cookieSession = require("cookie-session");
var jokes = require("./model/jokes");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var jokesAPI = require("./routes/jokesapi");
var jokesRouter = require("./routes/jokes");
var allJokesRouter = require("./routes/alljokes");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(
	cookieSession({
		name: "session",
		secret: "I_should_never_be_visible_in_code",
		maxAge: 1800000
	})
);
app.use(function(req, res, next) {
	if (req.method == "POST") {
		if (req.body.userName) {
			req.session.userName = req.body.userName;
			req.method = "GET";
		}
	}
	next();
});

app.use(function(req, res, next) {
	if (req.url.startsWith("/api")) {
		return next();
	} else if (req.session.userName) {
		return next();
	} else {
		req.url = "/login";
		return next();
	}
});

app.use("/", indexRouter);
app.use("/jokes", jokesRouter);
app.use("/users", usersRouter);
app.use("/alljokes", allJokesRouter);
app.use("/api", jokesAPI);

app.post("/storejoke", (req, res, next) => {
	jokes.addJoke(req.body.joke);
	res.render("addjoke", {
		title: "add joke",
		jokes: jokes.getAllJokes(),
		rbody: req.body.joke,
		counter: req.session.addJokeCounter
	});
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render("error");
});

module.exports = app;
