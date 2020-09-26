const argonautesController = require("../controllers").argonautes;

module.exports = (app) => {
  app.get("/api", (req, res) =>
    res.status(200).send({
      message: "Welcome to the Argonautes API!",
    })
  );

  app.post("/api/argonautes", argonautesController.create);
  app.get("/api/argonautes", argonautesController.list);
  app.delete("/api/argonautes/:argonautesId", argonautesController.destroy);
};
