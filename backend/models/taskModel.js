const db = require("./userModel");

const getAllTasks = (userId, callback) => {
  db.query("SELECT * FROM tasks WHERE user_id = ?", [userId], callback);
};

const createTask = (task, callback) => {
  db.query("INSERT INTO tasks SET ?", task, callback);
};

const updateTask = (id, task, callback) => {
  db.query("UPDATE tasks SET ? WHERE id = ?", [task, id], callback);
};

const deleteTask = (id, callback) => {
  db.query("DELETE FROM tasks WHERE id = ?", [id], callback);
};

module.exports = { getAllTasks, createTask, updateTask, deleteTask };
