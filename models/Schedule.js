const mongoose = require("mongoose");
const user = require("./User")

const scheduleSchema = new mongoose.Schema({
    index: String,
    name: String,
    week: String,
    day: String,
    date: String,
    time: String,
    location: String,
    contact: String,
    listAttendants: [{ type: String }], // Assuming Session is another model
});

module.exports = mongoose.model("Schedule", scheduleSchema); 


// https://medium.com/@sriram.se21/step-by-step-tutorial-building-a-mern-stack-application-from-scratch-d281010715e4