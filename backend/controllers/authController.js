const bcrypt = require("bcryptjs");
const jwt = require("jwt-simple");
const db = require("../models/userModel");

const register = (req, res) => {
  const { username, password } = req.body;

  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) return res.status(500).json({ error: "Error hashing password" });

    db.query(
      "INSERT INTO users (username, password) VALUES (?, ?)",
      [username, hashedPassword],
      (err, result) => {
        if (err) return res.status(500).json({ error: err.message });

        res.status(201).json({ message: "User registered successfully" });
      }
    );
  });
};

const login = (req, res) => {
  const { username, password } = req.body;

  db.query("SELECT * FROM users WHERE username = ?", [username], (err, result) => {
    if (err || result.length === 0) return res.status(400).json({ error: "Invalid credentials" });

    const user = result[0];
    bcrypt.compare(password, user.password, (err, match) => {
      if (err || !match) return res.status(400).json({ error: "Invalid credentials" });

      const token = jwt.encode({ id: user.id }, process.env.JWT_SECRET);
      res.status(200).json({ token });
    });
  });
};

module.exports = { register, login };
