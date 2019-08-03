const db = require("../models");

module.exports = {
  create: function(req, res) {
    console.log("Request", req.body);
    db.SavedArticle.create(req.body)
      .then(result => res.json(result))
      .catch(err => res.status(402).json(err));
  },
  findAll: function(req, res) {
    db.SavedArticle.find({})
      .then(result => res.render("savedarticle", { article: result }))
      .catch(err => res.status(402).json(err));
  },
  findOne: function(req, res) {
    db.SavedArticle.findOne({ _id: req.params.id })
      .populate("note")
      .then(result => res.json(result))
      .catch(err => res.status(402).json(err));
  },
  remove: function(req, res) {
    db.SavedArticle.remove({}).then(result => res.json(result));
  },
  removeOne: function(req, res) {
    console.log(req.params.id);
    db.SavedArticle.remove({ _id: req.params.id }).then(result =>
      res.json(result).catch(err => res.json(err))
    );
  }
};
