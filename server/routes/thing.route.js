const ThingController = require("../controllers/thing.controllers");

const routes = (app) => {
  app.get("/api/things", ThingController.findAllThings);
  app.post("/api/things", ThingController.createNewThings);
  app.get("/api/things/:id", ThingController.getOneThing);
  app.patch("/api/things/:id", ThingController.updateThingLikes);
  app.delete("/api/things/:id", ThingController.deleteThing);
};

module.exports = routes;
