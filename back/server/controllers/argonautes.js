const Argonautes = require("../models").Argonautes;

module.exports = {
  create(req, res) {
    return Argonautes.create({
      title: req.body.title,
    })
      .then((argonautes) => res.status(201).send(argonautes))
      .catch((error) => res.status(400).send(error));
  },
  list(req, res) {
    return Argonautes.findAll()
      .then((argonautes) => res.status(200).send(argonautes))
      .catch((error) => res.status(400).send(error));
  },
  destroy(req, res) {
    return Argonautes.findByPk(req.params.argonautesId)
      .then((argonautes) => {
        if (!argonautes) {
          return res.status(400).send({
            message: "Argonautes Not Found",
          });
        }
        return argonautes
          .destroy()
          .then(() =>
            res
              .status(204)
              .send({ message: "Argonautes supprimer avec succès." })
          )
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
