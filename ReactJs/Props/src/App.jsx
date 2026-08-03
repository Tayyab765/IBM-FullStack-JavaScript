import { useState } from "react";
import { StudentPanel } from "./components/StudentPanel.jsx";
import { TaskList } from "./components/Tasks.jsx";

class Task {
  constructor(title, desc, status) {
    this.title = title;
    this.desc = desc;
    this.status = status;
  }
}

function AddFormPanel({ addNewTask }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [status, setStatus] = useState("incomplete");

  function clickAddTaskHandler() {
    addNewTask(new Task(title, desc, status));
    setTitle((pre) => "");
    setDesc((pre) => "");
    setStatus((pre) => "incomplete");
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
        <select
          onChange={(event) => setStatus((pre) => event.target.value)}
          name="status"
          value={status}
          id=""
          className="border"
        >
          <option value="incomplete">Incomplete</option>
          <option value="pending">Pending</option>
          <option value="complete">Complete</option>
        </select>
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

function TaskCard({ taskForCard, deleteCardTask, taskIndex }) {
  return (
    <>
      <div className="w-100">
        <div className="flex flex-col bg-green-300 p-10 mt-5 rounded-lg gap-2 ">
          <div className="text-2xl font-bold">{taskForCard.title}</div>
          <div> {taskForCard.desc}</div>
          <button
            onClick={() => deleteCardTask(taskIndex)}
            className="bg-red-300 py-2 rounded-md cursor-pointer"
          >
            {console.log(`index ${taskIndex}`)} Delete
          </button>
        </div>
      </div>
    </>
  );
}

function TaskDisplayPanel({ currentTasks, deleteSomeTask }) {
  return (
    <>
      {currentTasks.map((task, index) => (
        <TaskCard
          taskForCard={task}
          deleteCardTask={deleteSomeTask}
          taskIndex={index}
        />
      ))}
    </>
  );
}

function App() {
  const [myTasks, setMyTask] = useState([
    new Task("Coding", "complete"),
    new Task("Assignment", "incomplete"),
    new Task("Prepare Quiz", "pending"),
    new Task("Reading", "complete"),
  ]);

  const addTask = (newTask) => {
    setMyTask((pre) => {
      return [newTask, ...pre];
    });
  };

  const deleteTask = (index) => {
    const newTask = myTasks.filter((task, i) => {
      return i !== index;
    });
    setMyTask((pre) => newTask);
    console.log("Clicked");

    console.log("Deleting index ", index);
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <AddFormPanel addNewTask={addTask} />
        <TaskDisplayPanel currentTasks={myTasks} deleteSomeTask={deleteTask} />
      </div>
    </>
  );
}

export default App;
