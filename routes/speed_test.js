const moment = require("moment");
const _ = require("lodash");
const today = moment().format("MMMM Do YY");
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/speed_test', function(req, res) {
    res.render("game", { title: "GameZone" })
    // res.render("welcome", { title: "GameZone" })
    // res.send('hey!');
});

module.exports = router;

