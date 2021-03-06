const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

console.log(process.env);

// routes

app.use(express.static("./public"));

require("./routes/viewRoutes")(app);
require("./routes/apiRoutes")(app);

app.listen(PORT, () => {
  console.log(`App running on port http://localhost:${PORT}`);
});
