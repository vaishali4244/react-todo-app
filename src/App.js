import React, { useState } from "react";
import List from "./components/List";
import Add from "./components/Add";
import "./App.css";


const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (i) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(i, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <Add addTask={addTask} />
      <List tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
