const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const users = require("../data/users");

const JWT_SECRET = "supersecretkey";

// Login function
function login(username, password) {
  const user = users.find(u => u.username === username);
  if (!user) return null;

  const valid = bcrypt.compareSync(password, user.password);
  if (!valid) return null;

  const token = jwt.sign(
    { id: user.id, username: user.username },
    JWT_SECRET,
    { expiresIn: "1h" }
  );

  return token;
}

// Middleware to protect routes
function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid token" });
  }
}

module.exports = {
  login,
  authenticate
};
