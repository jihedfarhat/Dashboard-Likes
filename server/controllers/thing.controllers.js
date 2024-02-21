// The controller does the CRUD for the DB
// import the model here

const Thing = require("../models/thing.model");
module.exports = {
  // ==========READ ALL==========
  findAllThings: (req, res) => {
    Thing.find()
      .sort({ Likes: -1 }) 
      .then((allThings) => {
        res.json({ Things: allThings });
      })
      .catch((err) => {
        res.json({ Message: "Something wrong", err });
      });
  },

  // ==========CREATE==========
  createNewThings: (req, res) => {
    Thing.create(req.body)
      .then((newThing) => {
        res.status(200).json({ Things: newThing });
      })
      .catch((err) => {
        res.status(400).json({ Message: "Something wrong", err });
      });
  },

  // ==========(Read one) Getting Data from a URL==========
  getOneThing: (req, res) => {
    Thing.findOne({ _id: req.params.id })
      .then((oneThing) => {
        res.json({ Things: oneThing });
      })
      .catch((err) => {
        res.status(400).json({ Message: "Something wrong", err });
      });
  },

  // ==========(Update)==========
  updateThingLikes: (req, res) => {
    Thing.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    )
      .then((updatedThing) => {
        res.json({ Things: updatedThing });
      })
      .catch((err) => {
        res.status(400).json({ Message: "Something wrong", err });
      });
  },

  // ==========(Delete)==========
  deleteThing: (req, res) => {
    Thing.deleteOne({ _id: req.params.id })
      .then((result) => {
        res.json({ Result: result });
      })
      .catch((err) => {
        res.status(400).json({ Message: "Something wrong", err });
      });
  },
};
