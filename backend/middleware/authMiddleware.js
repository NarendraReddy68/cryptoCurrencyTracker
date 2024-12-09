const jwt = require("jwt-simple");

const authenticate = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) return res.status(401).json({ error: "No token provided" });

  try {
    const decoded = jwt.decode(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid token" });
  }
};

module.exports = authenticate;
