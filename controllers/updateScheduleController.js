const Session = require("../models/Schedule");

exports.update = async (req, res) => {
    //update only if it isnt already there and send a already updated message
    //dont update all the sessions, just the latest one
    //figure out the date data type
    try {
        // Loop over sessionData array
        for (const session of req.body) {
            // Create a new session document using the Session model
            const newSession = new Session({
                name: session.name,
                week: session.week,
                day: session.day,
                date: new Date(session.date), // Convert date string to Date object
                time: session.time,
                location: session.location,
                contact: session.contact,
                listAttendants: [] // Initialize listAttendants as an empty array
            });
            
            // Save the new session document to the database
            const savedSession = await newSession.save();
            console.log('Session saved:', savedSession);
        }
        res.status(200).json({ message: 'Sessions saved successfully' });
    } catch (error) {
        console.error('Error saving sessions:', error);
        res.status(500).json({ error: 'Error saving sessions' });
    }
};