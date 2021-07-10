const { Workout } = require("../models");

module.exports = {
  async createWorkout({ body }, res) {
    const workout = await Workout.create(body);

    if (!workout) {
      return res.status(500).json({ message: "Unable to create Workout!" });
    }
    res.status(200).json(workout);
  },

  async updateWorkout(req, res) {
    const exercise = await Workout.findByID(req.params.id);

    if (!exercise) {
      return res
        .status(500)
        .json({ message: "Unable to add Exercise to Workout!" });
    }
    res.status(200).json(exercise);
  },
};
