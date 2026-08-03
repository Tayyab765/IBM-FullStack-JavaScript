import { useState } from "react";

import { useTaskStore } from "./store/taskStore.js";
import { AddFormPanel } from "./components/AddFormPanel.jsx";
import { TaskCard } from "./components/TaskCard.jsx";
import { TaskDisplayPanel } from "./components/TaskDisplayPanel.jsx";
import { EditTask } from "./components/EditTaskDialog.jsx";
import { useDialogStore } from "./store/editDialogStore.js";

function NewApp() {
  const displayDialogBox = useDialogStore((state) => state.showDialog);

  return (
    <>
      <div className="flex flex-col relative items-center mt-3 max-w-md mx-auto">
        <div className="w-full">
          <AddFormPanel />
        </div>
        <div className="flex-1 overflow-y-auto ">
          <TaskDisplayPanel />
        </div>
        <div>
          <EditTask />
        </div>
      </div>
    </>
  );
}

export default NewApp;
