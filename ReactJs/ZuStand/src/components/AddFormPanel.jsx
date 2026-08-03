import { useTaskStore } from "../store/taskStore";
import { useState } from "react";
import { Task } from "../models/task";

export function AddFormPanel() {
  const taskAdder = useTaskStore((state) => state.addTask);
  const totalTasks = useTaskStore((state) => state.myTasks);
  const taskID = useTaskStore((state) => state.nextId);
  const generateTaskId = useTaskStore((state) => state.createNextID);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  function clickAddTaskHandler() {
    taskAdder(new Task(title, desc));
    console.log("Task Added");
    setTitle((pre) => "");
    setDesc((pre) => "");
  }

  return (
    <div>
      <div className="flex flex-col bg-gray-200 p-10 rounded-lg gap-3 mt-5">
        <input
          onChange={(event) => setTitle((pre) => event.target.value)}
          type="text"
          name=""
          value={title}
          placeholder="Enter Title"
          className="border p-2"
        />
        <input
          onChange={(event) => setDesc((pre) => event.target.value)}
          type=""
          name=""
          value={desc}
          placeholder="Enter description"
          className="border p-2"
        />
        <button
          onClick={clickAddTaskHandler}
          className="bg-blue-500 py-2 rounded-md cursor-pointer "
        >
          Add Task
        </button>
      </div>
    </div>
  );
}
