const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const signupRoute = require("./routes/signup"); // Import the signup route
const loginRoute = require("./routes/login");
const scheduleRoute = require("./routes/schedule");
const searchbarRoute = require("./routes/searchbar");
const authenticateMiddleware = require("./middleware/auth");
const updatePorfile = require("./routes/editprofile");
const uploadProfilePicture = require("./routes/uploadProfilePic");
const app = express();
// Use the cors middleware
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     credentials: true,
//   })
// );
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

// Use the signup route : no server side authentication required
app.use("/api", loginRoute);
app.use("/api", signupRoute);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//NOTE: OTHER ROUTE HANDLERS SHOULD BE ADDED HERE.INCLUDE "token" in the client-side headers
app.use("/schedule", scheduleRoute);
app.use("/api", updatePorfile);
app.use("/api", uploadProfilePicture);

app.use(authenticateMiddleware);

app.use("/api", searchbarRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
