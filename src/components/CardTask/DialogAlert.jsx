import styles from "./DialogAlert.module.css"

import * as AlertDialog from "@radix-ui/react-alert-dialog";

import { Trash } from "phosphor-react";

export const DialogAlert = ({ deleteTask }) => {
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
