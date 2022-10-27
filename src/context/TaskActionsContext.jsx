import { createContext, useReducer } from "react";

export const TaskActionsContext = createContext();

export const tasksReducer = (state, action) => {
  const dateFormat = new Date().toLocaleTimeString("pt-br", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  console.log(action.text);

  switch (action.type) {
    case "ADD":
      const newTask = {
        id: dateFormat + ":" + new Date().getMilliseconds(),

        time: dateFormat,

        text: action.text,
      };
      return [...state, newTask];

    case "EDIT":
      state.filter((task) => {
        let taskId = task.id === action.id;
        if (taskId) {
          if (action.text !== "") {
            task.text = action.text;
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

export const TaskActionsContextProvider = ({ children }) => {
  const [tasks, dispatchTasks] = useReducer(tasksReducer, []);

  return (
    <TaskActionsContext.Provider value={{ tasks, dispatchTasks }}>
      {children}
    </TaskActionsContext.Provider>
  );
};
