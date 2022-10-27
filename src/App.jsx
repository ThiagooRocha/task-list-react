import { useState, useContext } from "react";
import { CardTask } from "../src/components/CardTask/CardTask";

import { TaskActionsContext } from "../src/context/TaskActionsContext";

function App() {
  const { tasks, dispatchTasks } = useContext(TaskActionsContext);

  const [textTask, setTextTask] = useState("");
  const [editTextTask, setEditTextTask] = useState("");

  function handleAddTask(event, textTask) {
    event.preventDefault();
    if (textTask !== "") {
      dispatchTasks({ type: "ADD", text: textTask });
      setTextTask("");
    }
  }

  function editTask(task, editTextTask) {
    dispatchTasks({ type: "EDIT", id: task, text: editTextTask });
  }

  function deleteTask(taskId) {
    dispatchTasks({ type: "DELETE", id: taskId });
  }

  return (
    <div className="container">
      <header>
        <h2>Hello!</h2>
      </header>

      <form onSubmit={(e) => handleAddTask(e, textTask)}>
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
                editTask(task.id, editTextTask);
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
