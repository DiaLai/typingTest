const moment = require("moment");
const _ = require("lodash");
const today = moment().format("MMMM Do YY");
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/speed_test', function(req, res) {
    // res.render("game", { title: "GameZone" })
    // res.render("welcome", { title: "GameZone" })
    res.send('hey!');
});

// router.get("/score", async (req, res) => {
//     const scores = await Score.find({});
//
//     const calculateTotalScore = arr =>
//         _.reduce(_.map(arr, "score"), (sum, n) => sum + n, 0);
//
//     let score = {
//         topToday: _.orderBy(
//             scores.filter(score => score.date === today),
//             "score",
//             "desc"
//         ).slice(0, 10),
//         topAll: _.orderBy(scores, "score", "desc").slice(0, 10),
//         wpm: scores.length ? calculateTotalScore(scores) : 0
//     };
//
//     if (!req.session.userId) return res.send(score);
//
//     let userScore = _.filter(scores, d => d.userId == req.session.userId);
//     let userTotalScore = calculateTotalScore(userScore);
//
//     score.userRightWords = userTotalScore;
//     score.userTopFive = _.orderBy(userScore, "score", "desc").slice(0, 5);
//     score.userWpm = Math.round(userTotalScore / userScore.length)
//         ? Math.round(userTotalScore / userScore.length)
//         : 0;
//     score.name = user.name;
//
//     await user.save();
//
//     let calculateAccuracy = (rightWords, wrongWords) =>
//         Math.round((rightWords / (rightWords + wrongWords)) * 100);
//
//     score.userGamesPlayed = user.gamesPlayed;
//     score.userWrongWords = user.wrongWords;
//     score.perfectGames = user.perfectGames;
//     score.userAccuracy = calculateAccuracy(
//         score.userRightWords,
//         score.userWrongWords
//     );
//
//     let totalRightWords = calculateTotalScore(scores);
//     let totalWrongWords = _.reduce(
//         _.map(users, "wrongWords"),
//         (sum, n) => sum + n,
//         0
//     );
//     score.totalAccuracy = calculateAccuracy(totalRightWords, totalWrongWords);
//
//     res.send(score);
// });
//
// router.post("/score", async (req, res, next) => {
//     res.redirect("/score");
// });

module.exports = router;

// module.exports = {
//     // apiRoutes: router => {
//         // GET /
//         // router.get("/", (req, res) => {
//         //     res.redirect("game");
//         // });
//
//         // GET /game
//         router.get("/speed_test", (req, res) =>
//             res.render("game", { title: "GameZone" })
//         );
//
//     //     // GET /score
//     //     //TODO: refactor - minimize - moveout chunks

//     // }
// };
