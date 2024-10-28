import React, { useState } from "react";
export default function ToDoList() {
  const [Task, setTask] = useState([]);
  const AddTask = () => {
    const newTask = document.getElementById("task").value;
    if (newTask.trim() !== "") {
      setTask((t) => [...t, newTask]);
      document.getElementById("task").value = "";
    }
  };
  const GoUp = (index) => {
    if (index > 0) {
      const updateTask = [...Task];
      [updateTask[index], updateTask[index - 1]] = [
        updateTask[index - 1],
        updateTask[index],
      ];
      setTask(updateTask);
    }
  };
  const GoDown = (index) => {
    if (index < Task.length) {
      const updateTask = [...Task];
      [updateTask[index], updateTask[index + 1]] = [
        updateTask[index + 1],
        updateTask[index],
      ];
      setTask(updateTask);
    }
  };
  const RemoveTask = (index) => {
    setTask(Task.filter((_, i) => i !== index));
  };
  return (
    <div>
      <h1>To-Do-List</h1>
      <input type="text" placeholder="Enter a task..." id="task" />
      <button onClick={AddTask}>Add</button>
      <ul>
        {Task.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => RemoveTask(index)}>Remove</button>
            <button onClick={() => GoUp(index)}>Go Up</button>
            <button onClick={() => GoDown(index)}>Go Down</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
