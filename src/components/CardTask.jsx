import styles from "./CardTask.module.css";
import { Trash, Pencil, FrameCorners, DotsThree, X } from "phosphor-react";

export const CardTask = ({ text, time, deleteTask }) => {
  return (
    <div className={styles.task}>
      <strong>{text}</strong>
      <small>{time}</small>
      <PopoverBox deleteTask={deleteTask} />
    </div>
  );
};

import * as AlertDialog from "@radix-ui/react-alert-dialog";

const DialogAlert = ({ deleteTask }) => {
  return (
    <AlertDialog.Root className={styles.dialog_root}>
      <AlertDialog.Trigger className="btn">
        Excluir <Trash size={24} color="#d4d4d4" weight="light" />
      </AlertDialog.Trigger>

      <AlertDialog.Portal>
        <AlertDialog.Overlay className={styles.dialog_overlay} />
        <AlertDialog.Content className={styles.dialog_content}>
          <AlertDialog.Title>Desaja excluir a tarefa?</AlertDialog.Title>
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

import * as Popover from "@radix-ui/react-popover";

const PopoverBox = ({ deleteTask }) => {
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
            <X size={15} weight="bold" />
          </Popover.Close>
          {/*
          <button className="btn">
            Editar
            <Pencil size={24} color="#d4d4d4" weight="light" />
          </button>
          <DialogAlert deleteTask={deleteTask} />
          <button className="btn">
            Ver tarefa
            <FrameCorners size={25} weight="light" />
          </button>
          */}
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
