const router = require("express").Router();
const controller = require("../controller");

router.route("/").get(controller.articles.findAll);
// this will get all the articles that we have in our database

router.route("/scrape").get(controller.articles.create);

router.route("/articles/:id").get(controller.articles.findOne);

router.route("/savedarticles").get(controller.savedarticle.findAll);

router.route("/save").post(controller.savedarticle.create);

router.route("/articlesnote/:id").post(controller.notes.create);

router.route("/delete/articles").get(controller.articles.remove);

router.route("/delete/savedarticles").get(controller.savedarticle.remove);

router
  .route("/deleteone/savedarticles/:id")
  .get(controller.savedarticle.removeOne);

router.route("/delete/note/:id").get(controller.notes.delete);

module.exports = router;
