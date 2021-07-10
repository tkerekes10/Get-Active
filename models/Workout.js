const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: new Date(new Date().setDate(new Date().getDate())),
  },
  exercises: [
    {
      type: {
        type: String,
      },
      name: {
        type: String,
        trim: true,
        unique: false,
      },
      duration: {
        type: Number,
      },
      distance: {
        type: Number,
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
    },
  ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
