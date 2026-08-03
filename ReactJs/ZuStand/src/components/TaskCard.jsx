import { useTaskStore } from "../store/taskStore";
import { TaskDisplayPanel } from "./TaskDisplayPanel";

export function TaskCard({ taskIndex }) {
  const tasks = useTaskStore((state) => state.myTasks);
  const taskDeleter = useTaskStore((state) => state.deleteTask);

  return (
    <>
      <div className="w-100">
        <div className="flex flex-col bg-green-300 p-10 mt-5 rounded-lg gap-2 ">
          <div className="text-2xl font-bold">{tasks[taskIndex].title}</div>
          <div> {tasks[taskIndex].desc}</div>
          <div className="flex gap-3">
            <button
              // onClick={() => taskDeleter(taskIndex)}
              className="flex-1 bg-red-300 py-2 rounded-md cursor-pointer"
            >
              Edit
            </button>
            <button
              onClick={() => taskDeleter(taskIndex)}
              className="flex-1 bg-red-300 py-2 rounded-md cursor-pointer"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
