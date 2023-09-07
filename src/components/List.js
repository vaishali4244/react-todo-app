import React from "react";
import './List.css';

const List = ({ tasks, deleteTask }) => {
  return (
    <ol className="task-list">
      {tasks.map((task, i) => (
        <li className="li" key={i}>
          {task}
          <button onClick={() => deleteTask(i)}>Delete</button>
        </li>
      ))}
    </ol>
  );
};


export default List;