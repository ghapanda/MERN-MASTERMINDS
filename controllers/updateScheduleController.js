const Session = require("../models/Schedule");
const User = require("../models/User");

exports.update = async (req, res) => {
  try {
    for (const sessionData of req.body) {
      let foundSession = await Session.findOne({ index: sessionData.index });

      if (!foundSession) {
        // If session not found, create a new one
        foundSession = new Session({
          index: sessionData.index,
          name: sessionData.name,
          week: sessionData.week,
          day: sessionData.day,
          date: sessionData.date, // Convert date string to Date object
          time: sessionData.time,
          location: sessionData.location,
          contact: sessionData.contact,
          listAttendants: [], // Initialize listAttendants as an empty array
        });
      } else {
        // If session found, update its properties
        foundSession.index = sessionData.index;
        foundSession.name = sessionData.name;
        foundSession.week = sessionData.week;
        foundSession.day = sessionData.day;
        foundSession.date = sessionData.date;
        foundSession.time = sessionData.time;
        foundSession.location = sessionData.location;
        foundSession.contact = sessionData.contact;
        // No need to update listAttendants if it's not provided in sessionData
      }

      // Save the session document to the database
      const savedSession = await foundSession.save();
    }

    res.status(200).json({ message: "Sessions saved successfully" });
  } catch (error) {
    console.error("Error saving sessions:", error);
    res.status(500).json({ error: "Error saving sessions" });
  }
};

exports.delete = async (req, res) => {
  try {
    // Find and delete the session with the specified index
    const deletedSession = await Session.deleteOne({ index: req.body.index });

    if (deletedSession.deletedCount === 1) {
      // If session was found and deleted successfully
      res.status(200).json({ message: "Session deleted successfully" });
    } else {
      // If session with the specified index was not found
      res.status(404).json({ error: "Session not found" });
    }
  } catch (error) {
    // If an error occurs during the deletion process
    console.error("Error deleting session:", error);
    res.status(500).json({ error: "Error deleting session" });
  }
};

exports.deleteUserSession = async (req, res) => {
  try {
    const { name, date, location } = req.body;
    // Retrieve all users
    const users = await User.find();

    // Iterate through each user
    for (const user of users) {
      // Retrieve all sessions for the current user
      const sessionExists = user.listSessions.some(
        (session) =>
          session[0] === name && session[1] === date && session[2] === location
      );
      if (sessionExists) {
        user.listSessions = user.listSessions.filter(
          (session) =>
            !(
              session[0] === name &&
              session[1] === date &&
              session[2] === location
            )
        );
        const savedUser = await user.save();
      }
    }
    // Send a response indicating success
    res.status(200).json({ message: "session deleted for user successfully" });
  } catch (error) {
    // Handle any errors that occurred during the process
    console.error("Error deleting sessions for user", error);
    res
      .status(500)
      .json({ message: "An error occurred while deleting sessions for user" });
  }
};

exports.updateUserSession = async (req, res) => {
  try {
    // Retrieve all users
    const users = await User.find();

    // Iterate through each user
    for (const user of users) {
      for (const sessionData of req.body) {
        let foundSession = user.listSessions.find(
          (session) => session[3] == sessionData.index
        );

        if (foundSession) {
          // If session found, update its properties
          foundSession[0] = sessionData.name;
          foundSession[1] = sessionData.date;
          foundSession[2] = sessionData.location;
          // No need to update listAttendants if it's not provided in sessionData

          const savedUser = await user.save();
        }

        // Save the session document to the database
      }
    }
    // Send a response indicating success
    res.status(200).json({ message: "session updated for user successfully" });
  } catch (error) {
    // Handle any errors that occurred during the process
    console.error("Error updating sessions for user", error);
    res
      .status(500)
      .json({ message: "An error occurred while updating sessions for user" });
  }
};

exports.addAttendant = async (req, res) => {
  try {
    const { index, username } = req.body;
    let foundSession = await Session.findOne({ index: index });
    if (foundSession) {
      if (!foundSession.listAttendants.includes(username)) {
        foundSession.listAttendants.push(username); // Initialize listAttendants as an empty array
        const savedSession = await foundSession.save();
        res.status(200).json({ message: "attendant saved successfully" });
      }
    } else {
      // If session with the specified index was not found
      res
        .status(403)
        .json({ error: "Session ${sessionIndex} not found to save attendant" });
    }
  } catch (error) {
    // If an error occurs during the deletion process
    console.error("Error saving attendant:", error);
    res.status(500).json({ error: "Error saving attendant" });
  }
};

exports.deleteAttendant = async (req, res) => {
  try {
    const { index, username } = req.body;
    let foundSession = await Session.findOne({ index: index });
    if (foundSession) {
      if (foundSession.listAttendants.includes(username)) {
        foundSession.listAttendants = foundSession.listAttendants.filter(
          (attendant) => attendant !== username
        ); // Initialize listAttendants as an empty array
        const savedSession = await foundSession.save();
        res.status(200).json({ message: "attendant deleted successfully" });
      }
    } else {
      // If session with the specified index was not found
      res.status(403).json({
        error: "Session ${sessionIndex} not found to delete attendant",
      });
    }
  } catch (error) {
    // If an error occurs during the deletion process
    console.error("Error deleting attendant:", error);
    res.status(500).json({ error: "Error deleting attendant" });
  }
};

exports.addSession = async (req, res) => {
  try {
    const { username, name, date, location, index } = req.body;
    let foundUser = await User.findOne({ username });
    if (foundUser) {
      const newSession = [name, date, location, index];
      const sessionExists = foundUser.listSessions.some(
        (session) =>
          session[0] === name && session[1] === date && session[2] === location
      );
      if (!sessionExists) {
        foundUser.listSessions.push(newSession); // Initialize listAttendants as an empty array
        const savedUser = await foundUser.save();
        res.status(200).json({ message: "session saved to user successfully" });
      }
    } else {
      // If session with the specified index was not found
      res.status(403).json({ error: "User ${username} not found " });
    }
  } catch (error) {
    // If an error occurs during the deletion process
    console.error("Error saving session to user:", error);
    res.status(500).json({ error: "Error saving session to user" });
  }
};

exports.deleteSession = async (req, res) => {
  try {
    const { username, name, date, location } = req.body;
    let foundUser = await User.findOne({ username });
    if (foundUser) {
      const newSession = [name, date, location];
      const sessionExists = foundUser.listSessions.some(
        (session) =>
          session[0] === name && session[1] === date && session[2] === location
      );
      if (sessionExists) {
        foundUser.listSessions = foundUser.listSessions.filter(
          (session) =>
            !(
              session[0] === name &&
              session[1] === date &&
              session[2] === location
            )
        );
        const savedUser = await foundUser.save();
        res
          .status(200)
          .json({ message: "session deleted for user successfully" });
      }
    } else {
      // If session with the specified index was not found
      res.status(403).json({ error: "User ${username} not found " });
    }
  } catch (error) {
    // If an error occurs during the deletion process
    console.error("Error deleting session for user:", error);
    res.status(500).json({ error: "Error deleting session for user" });
  }
};
