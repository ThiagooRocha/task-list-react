import styles from "./CardTask.module.css";
import { useState } from "react";
import {
  Check,
  Trash,
  Pencil,
  FrameCorners,
  DotsThree,
  X,
} from "phosphor-react";

import * as Checkbox from "@radix-ui/react-checkbox";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import * as Dialog from "@radix-ui/react-dialog";
import * as Popover from "@radix-ui/react-popover";

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

const DialogAlert = ({ deleteTask }) => {
  return (
    <AlertDialog.Root className={styles.dialog_root}>
      <AlertDialog.Trigger className={styles.box_btn}>
        <Trash size={22} color="#d4d4d4" weight="bold" /> <span>Excluir</span>
      </AlertDialog.Trigger>

      <AlertDialog.Portal>
        <AlertDialog.Overlay className={styles.dialog_overlay} />
        <AlertDialog.Content className={styles.dialog_content}>
          <AlertDialog.Title>Deseja excluir essa tarefa?</AlertDialog.Title>
          <AlertDialog.Description>
            Ao excluir essa tarefa ela não poderá mais ser vizualizada.
          </AlertDialog.Description>
          <div className={styles.container_btn}>
            <AlertDialog.Cancel className={styles.dialog_btn}>
              Cancelar
            </AlertDialog.Cancel>
            <AlertDialog.Action
              onClick={deleteTask}
              className={styles.dialog_btn_delete}
            >
              Excluir
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};

const DialogEdit = ({ editTask, valueText, editTextTask, setEditTextTask }) => {
  const [open, setOpen] = useState(null);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className={styles.box_btn}>
        <Pencil size={22} color="#d4d4d4" weight="bold" />
        <span>Editar</span>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className={styles.dialog_overlay} />

        <Dialog.Content className={styles.dialog_content}>
          <Dialog.Close className={styles.dialog_close}>
            <X size={20} weight="bold" />
          </Dialog.Close>
          <Dialog.Title>Editar Tarefa</Dialog.Title>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log(editTextTask);
              if (editTextTask !== "") {
                setOpen(false);
                setEditTextTask("");
              }
            }}
          >
            <label>
              <p>{valueText}</p>
              <input
                type="text"
                placeholder={valueText}
                onChange={(e) => setEditTextTask(e.target.value)}
              />
            </label>
            <button onClick={editTask} className="btn">
              Salvar
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

const PopoverBox = ({
  deleteTask,
  editTask,
  valueText,
  editTextTask,
  setEditTextTask,
}) => {
  return (
    <Popover.Root>
      <div className={styles.settings}>
        <Popover.Trigger className={styles.popover_trigger}>
          <DotsThree size={32} />
          <Popover.Anchor className={styles.popover_ancor} />
        </Popover.Trigger>
      </div>

      <Popover.Portal>
        <Popover.Content className={styles.popover_content}>
          <Popover.Arrow className={styles.popover_arrow} />
          <Popover.Close className={styles.popover_close}>
            <X size={13} weight="bold" />
          </Popover.Close>
          <div className={styles.container}>
            <DialogEdit
              editTask={editTask}
              valueText={valueText}
              editTextTask={editTextTask}
              setEditTextTask={setEditTextTask}
            />

            <DialogAlert deleteTask={deleteTask} />

            <button className={styles.box_btn}>
              <FrameCorners size={22} weight="bold" />
              <span>Ver tarefa</span>
            </button>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
