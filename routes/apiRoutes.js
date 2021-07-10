const router = require("express").Router();
// const Transaction = require("../models/transaction.js");

const { Exercise, Workout } = require("../models");

module.exports = (app) => {
  app.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
      .then((dbExercise) => {
        res.json(dbExercise);
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
};
