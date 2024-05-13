const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const signupRoute = require("./routes/signup"); // Import the signup route

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3001;

mongoose
  .connect("mongodb://localhost:27017/my_database", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Use the signup route
app.use("/api", signupRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// // Connect to MongoDB
// mongoose
//   .connect("mongodb://localhost:27017/my_database", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.log(err));

// app.use(bodyParser.json());

// app.get("/", (req, res) => {
//   res.send("Hello everyone this is temporary!");
// });

// app.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}.`);
// });
