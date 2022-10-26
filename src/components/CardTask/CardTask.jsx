import styles from "./CardTask.module.css";
import { useState } from "react";
import { Check } from "phosphor-react";

import * as Checkbox from "@radix-ui/react-checkbox";

//Components
import { PopoverBox } from "./PopoverBox";

export const CardTask = ({
  text,
  time,
  deleteTask,
  editTask,
  valueText,
  editTextTask,
  setEditTextTask,
}) => {
  const [isCompletedTask, setIsCompletedTask] = useState(false);

  return (
    <div className={!isCompletedTask ? styles.task : styles.completed_task}>
      <CheckboxTask
        deleteTask={deleteTask}
        isCompletedTask={isCompletedTask}
        setIsCompletedTask={setIsCompletedTask}
      />
      <strong className={styles.text}>{text}</strong>
      <small className={styles.time}>{time}</small>
      <PopoverBox
        deleteTask={deleteTask}
        editTask={editTask}
        valueText={valueText}
        setEditTextTask={setEditTextTask}
      />
    </div>
  );
};

const CheckboxTask = ({ deleteTask, setIsCompletedTask }) => {
  function completedTask() {
    setTimeout(deleteTask, 1000);
    setIsCompletedTask(true);
  }

  return (
    <Checkbox.Root className={styles.checkbox_root} onClick={completedTask}>
      <Checkbox.Indicator>
        <Check size={12} weight="bold" />
      </Checkbox.Indicator>
    </Checkbox.Root>
  );
};
