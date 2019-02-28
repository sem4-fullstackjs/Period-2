var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/alljokes", function(req, res, next) {
	res.send();
});

module.exports = router;
