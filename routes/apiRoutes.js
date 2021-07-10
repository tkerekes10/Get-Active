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
    Workout.findByIdAndUpdate(
      req.params.id,
      {
        day: new Date(new Date().setDate(new Date().getDate())),
        exercises: [
          {
            type: req.body.type,
            name: req.body.name,
            weight: req.body.weight || "",
            sets: req.body.sets || "",
            reps: req.body.reps || "",
            duration: req.body.duration,
            distance: req.body.distance || "",
          },
        ],
      },
      { new: true }
    )
      .then((updatedWorkout) => {
        res.status(200).json(updatedWorkout);
      })
      .catch((err) => {
        res.status(400).json(err);
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
