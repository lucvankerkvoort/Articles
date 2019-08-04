const db = require("../models");

module.exports = {
  create: function(req, res) {
    console.log("before being pushed", req.body);
    db.Note.create(req.body)
      .then(function(dbnote) {
        console.log("after being pushed", dbnote);
        return db.Article.findOneAndUpdate(
          { _id: req.params.id },
          { note: dbnote._id },
          { new: true }
        );
      })
      .then(result => res.json(result))
      .catch(err => res.json(err));
  },
  delete: function(req, res) {
    db.Note.deleteOne({ _id: req.params.id }).then(result => res.json(result));
  }
};
