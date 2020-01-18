var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var genre = require("../models/genre.js");

// Create all our routes and set up logic within those routes where required.
// get route -> index
router.get("/", function (req, res) {
  res.redirect("/genre");
});

router.get("/genre", function (req, res) {
  // express callback response by calling genre.selectAllgenre
  genre.all(function (genreData) {
    var genreObject = { genre: genreData };
    console.log("genreObject console log here!!!", genreObject);

    // wrapper for orm.js that using MySQL query callback will return genre_data, render to index with handlebar
    res.render("index", genreObject);
  });
});


router.post("/api/genre", function (req, res) {
  genre.create(["genre_name", "description"],
    [ req.body.genre_name, req.body.description ], 
    function (result) {
      // wrapper for orm.js that using MySQL insert callback will return a log to console,
      // render back to index with handle
      console.log("post console log here!!!", result);
      res.json({ id: result.insertId });
    });
});

router.put("/api/genre/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  genre.update({ description: req.body.description }, condition, function (result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
