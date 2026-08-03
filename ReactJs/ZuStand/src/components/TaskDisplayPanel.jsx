import { useTaskStore } from "../store/taskStore";
import { TaskCard } from "./TaskCard";

export function TaskDisplayPanel() {
  const currentTasks = useTaskStore((state) => state.myTasks);

  return (
    <>
      {currentTasks.map((task, index) => (
        <TaskCard key={task.id} taskIndex={index} />
      ))}
    </>
  );
}
