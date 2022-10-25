import "./App.css";

import { useState, useReducer } from "react";
import { CardTask } from "./components/CardTask";

function App() {
  function handleAddTask(event) {
    event.preventDefault();
    if (textTask !== "") {
      dispatchTasks({ type: "ADD" });
    }
  }

  function editTask(task) {
    dispatchTasks({ type: "EDIT", id: task });
  }

  function deleteTask(taskId) {
    dispatchTasks({ type: "DELETE", id: taskId });
  }

  const tasksReducer = (state, action) => {
    const dateFormat = new Date().toLocaleTimeString("pt-br", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    switch (action.type) {
      case "ADD":
        const newTask = {
          id: dateFormat + ":" + new Date().getMilliseconds(),

          time: dateFormat,

          text: textTask,
        };
        setTextTask("");
        return [...state, newTask];

      case "EDIT":
        state.filter((task) => {
          let taskId = task.id === action.id;
          if (taskId) {
            if (editTextTask !== "") {
              task.text = editTextTask;
            }
          }
        });
        return [...state];

      case "DELETE":
        return state.filter((task) => task.id !== action.id);

      default:
        return [state];
    }
  };

  const [textTask, setTextTask] = useState("");
  const [editTextTask, setEditTextTask] = useState("");
  const [tasks, dispatchTasks] = useReducer(tasksReducer, []);

  return (
    <div className="container">
      <header>
        <h2>Hello!</h2>
      </header>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={textTask}
          placeholder="Digite sua tarefa"
          onChange={(e) => setTextTask(e.target.value)}
        />
        <button className="btn">Enviar</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <CardTask
              text={task.text}
              time={task.time}
              editTask={() => {
                editTask(task.id);
              }}
              valueText={task.text}
              deleteTask={() => {
                deleteTask(task.id);
              }}
              editTextTask={editTextTask}
              setEditTextTask={setEditTextTask}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
