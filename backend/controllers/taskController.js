const taskModel = require('../models/taskModel')

const getTasks = (req, res) => {
  const userId = req.user.id
  taskModel.getAllTasks(userId, (err, tasks) => {
    if (err) return res.status(500).json({error: 'Error fetching tasks'})

    res.status(200).json({tasks})
  })
}

const createTask = (req, res) => {
  const userId = req.user.id
  const {title, description, status} = req.body

  const newTask = {user_id: userId, title, description, status}
  taskModel.createTask(newTask, (err, result) => {
    if (err) return res.status(500).json({error: 'Error creating task'})

    res.status(201).json({message: 'Task created successfully'})
  })
}

const updateTask = (req, res) => {
  const taskId = req.params.id
  const {title, description, status} = req.body

  const updatedTask = {title, description, status}
  taskModel.updateTask(taskId, updatedTask, (err, result) => {
    if (err) return res.status(500).json({error: 'Error updating task'})

    res.status(200).json({message: 'Task updated successfully'})
  })
}

const deleteTask = (req, res) => {
  const taskId = req.params.id

  taskModel.deleteTask(taskId, (err, result) => {
    if (err) return res.status(500).json({error: 'Error deleting task'})

    res.status(200).json({message: 'Task deleted successfully'})
  })
}

module.exports = {getTasks, createTask, updateTask, deleteTask}
