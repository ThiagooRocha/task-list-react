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

  function deleteTask(taskId) {
    dispatchTasks({ type: "DELETE", id: taskId });
  }

  function tasksReducer(state, action) {
    switch (action.type) {
      case "ADD":
        const newTask = {
          id: new Date().toLocaleTimeString("pt-br", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          }),
          time: new Date().toLocaleTimeString("pt-br", {
            hour: "2-digit",
            minute: "2-digit",
          }),
          text: textTask,
        };
        setTextTask("");
        return [...state, newTask];
      case "DELETE":
        return state.filter((task) => task.id !== action.id);
      default:
        return [state];
    }
  }

  const [textTask, setTextTask] = useState("");
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
      {}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <CardTask text={task.text} time={task.time} deleteTask={() => {deleteTask(task.id)}}/>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
