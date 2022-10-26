import styles from "./PopoverBox.module.css"

import * as Popover from "@radix-ui/react-popover";

import { FrameCorners, DotsThree, X } from "phosphor-react";

//Components
import { DialogEdit } from "./DialogEdit";
import { DialogAlert } from "./DialogAlert";

export const PopoverBox = ({
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
