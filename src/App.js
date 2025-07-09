import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTask = () => {
    const trimmed = inputValue.trim();
    if (trimmed !== "") {
      setTasks([...tasks, trimmed]);
      setInputValue("");
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">📝 To-Do List</h2>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="New Task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleAddTask}>
          Add
        </button>
      </div>

      {tasks.length === 0 ? (
        <p className="text-muted">No task.</p>
      ) : (
        <ul className="list-group">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {task}
              <button
                className="btn btn-sm btn-danger"
                onClick={() => handleDeleteTask(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
