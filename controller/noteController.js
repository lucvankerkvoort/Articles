const db = require("../models");

module.exports = {
  create: function(req, res) {
    db.Note.create(req.body)
      .then(function(dbnote) {
        return db.Article.findOneAndUpdate(
          { _id: req.params.id },
          { note: dbnote._id },
          { new: true }
        );
      })
      .then(result => res.json(result))
      .catch(err => res.json(err));
  }
};
