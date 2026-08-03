import { useDialogStore } from "../store/editDialogStore";
import { useTaskStore } from "../store/taskStore";
import { useEffect, useState } from "react";

export function EditTask() {
  const closeDialogBox = useDialogStore((state) => state.disableEditDialog);
  const selectedTaskIndex = useDialogStore((state) => state.selectedTaskIndex);
  const tasks = useTaskStore((state) => state.myTasks);
  const updateTaskByIndex = useTaskStore((state) => state.updateTaskByIndex);

  const selectedTask =
    selectedTaskIndex !== null ? tasks[selectedTaskIndex] : null;

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    if (selectedTask) {
      setTitle(selectedTask.title ?? "");
      setDesc(selectedTask.desc ?? "");
    }
  }, [selectedTask]);

  function handleSave() {
    if (selectedTaskIndex === null) {
      return;
    }

    updateTaskByIndex(selectedTaskIndex, {
      title: title.trim(),
      desc: desc.trim(),
    });
    closeDialogBox();
  }

  if (selectedTaskIndex === null) {
    return null;
  }

  return (
    <div>
      <div className="absolute flex flex-col justify-center items-center inset-0">
        <div className="bg-white flex flex-col w-full gap-3 ">
          <div className="flex flex-col justify-center items-center">
            Edit Task
          </div>
          <div>
            <input
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              type="text"
              placeholder="Title"
              className="border p-1 rounded-lg"
            />
          </div>
          <div>
            <input
              value={desc}
              onChange={(event) => setDesc(event.target.value)}
              type="text"
              placeholder="Description"
              className="border p-1 rounded-lg"
            />
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleSave}
              className="flex-1 bg-blue-500 rounded-lg cursor-pointer py-2 "
            >
              Save
            </button>
            <button
              onClick={closeDialogBox}
              className="flex-1 bg-red-500 rounded-lg cursor-pointer py-2 "
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
