const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  type: {
    type: String,
    trim: true,
    //required: "You must select a workout type",
  },
  name: {
    type: String,
    unique: true,
    trim: true,
    //required: "Enter a name for the exercise",
  },

  duration: {
    type: Number,
    //required: "Enter a duration for the exercise",
  },

  weight: {
    type: Number,
    //required: "Enter your starting weight for the exercise",
  },

  reps: {
    type: Number,
    //required: "Enter the number of rep(s) for the exercise",
  },
  sets: {
    type: Number,
    //required: "Enter the number of set(s) for the exercise",
  },
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
