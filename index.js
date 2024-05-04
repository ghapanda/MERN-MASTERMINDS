const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello everyone this is temporary!");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});
