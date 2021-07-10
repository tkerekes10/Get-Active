const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/getactive", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

db.Workout.create({})
  .then((dbWorkout) => {
    console.log(dbWorkout);
  })
  .catch(({ message }) => {
    console.log(message);
  });

db.Exercise.create({})
  .then((dbExercise) => {
    console.log(dbExercise);
  })
  .catch(({ message }) => {
    console.log(message);
  });

// routes
// app.use(require("./routes"));

app.use(express.static("./public"));

require("./routes/viewRoutes")(app);
require("./routes/apiRoutes")(app);

app.listen(PORT, () => {
  console.log(`App running on port http://localhost:${PORT}`);
});
