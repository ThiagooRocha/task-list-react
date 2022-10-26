import styles from "./DialogEdit.module.css"

import { useState } from "react";

import * as Dialog from "@radix-ui/react-dialog";

import { Pencil, X } from "phosphor-react";


export const DialogEdit = ({
  editTask,
  valueText,
  editTextTask,
  setEditTextTask,
}) => {
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
