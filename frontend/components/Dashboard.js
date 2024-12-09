import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskForm from "./TaskForm";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.get("http://localhost:5000/api/tasks", {
          headers: { Authorization: token },
        });
        setTasks(res.data.tasks);
      } catch (err) {
        console.log(err);
      }
    };

    fetchTasks();
  }, []);

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <TaskForm setTasks={setTasks} />
      <div>
        <select onChange={handleFilter}>
          <option value="">All</option>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <ul>
        {tasks
          .filter((task) => (filter ? task.status === filter : true))
          .map((task) => (
            <li key={task.id}>
              {task.title} - {task.status}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Dashboard;
