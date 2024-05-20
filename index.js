const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const signupRoute = require("./routes/signup"); // Import the signup route
const loginRoute = require("./routes/login");
const updateScheduleRoute = require("./routes/update-schedule");

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3002;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome to my MERN stack app!");
});
app.get("/api", (req, res) => {
  res.send("this is the api endpoint");
});
mongoose
  .connect("mongodb://localhost:27017/my_database", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Use the signup route
app.use("/api", loginRoute);
app.use("/api", signupRoute);
app.use("/api", updateScheduleRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
