const db = require("../models");
const axios = require("axios");
const cheerio = require("cheerio");

module.exports = {
  create: function(req, res) {
    axios.get("http://www.echojs.com/").then(function(response) {
      // Then, we load that into cheerio and save it to $ for a shorthand selector
      var $ = cheerio.load(response.data);

      // Now, we grab every h2 within an article tag, and do the following:
      $("article h2").each(function(i, element) {
        // Save an empty result object
        var result = {};

        // Add the text and href of every link, and save them as properties of the result object
        result.title = $(this)
          .children("a")
          .text();
        result.link = $(this)
          .children("a")
          .attr("href");
        db.Article.create(result)
          .then(result => res.json(result))
          .catch(err => res.status(402).json(err));
      });
    });
  },
  findAll: function(req, res) {
    db.Article.find({})
      .then(result => res.render("scrape", { article: result }))
      .catch(err => res.status(402).json(err));
  },
  findOne: function(req, res) {
    console.log(req.params);
    db.Article.findOne({ _id: req.params.id })
      .populate("note")
      .then(result => res.json(result))
      .catch(err => res.status(402).json(err));
  },
  remove: function(req, res) {
    db.Article.remove({}).then(result => res.json(result));
  }
};
