// middleware/authenticate.js

const jwt = require("jsonwebtoken");
const secretKey = "your-secret-key";

const authenticateMiddleware = (req, res, next) => {
  // Extract the token from the request headers
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];
  console.log("do we get into authentication");
  if (!token) {
    console.log("we are in this if statement")
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    // Verify the token
    const decodedToken = jwt.verify(token, secretKey);
    // Attach user information to the request object for further processing
    req.user = decodedToken;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
};

module.exports = authenticateMiddleware;
