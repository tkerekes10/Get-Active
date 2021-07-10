const router = require("express").Router();
// const Transaction = require("../models/transaction.js");

const { Workout } = require("../models");

module.exports = (app) => {
  app.post("/api/workouts/", ({ body }, res) => {
    Workout.create(body)
      .then((dbExercise) => {
        res.status(200).json(dbExercise);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

  app.put("/api/workouts/:id", (req, res) => {
    // const id = location.search.slice(4);
    console.log(Workout.findById(req.params.id));
    Workout.findByIdAndUpdate(req.params.id, {
      day: new Date(new Date().setDate(new Date().getDate())),
      exercises: [{}],
    });
  });

  app.get("/api/workouts", (req, res) => {
    Workout.find({})
      .sort({ date: -1 })
      .then((dbExercise) => {
        res.json(dbExercise);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

  app.get("/api/workouts/range", (req, res) => {
    Workout.find({})
      .sort({ date: -1 })
      .then((dbExercise) => {
        res.json(dbExercise);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
};
