class Task {
  constructor(name, description, deadline, status) {
    this.name = name;
    this.description = description;
    this.deadline = deadline;
    this.status = status;
  }
}

//using props
export function TaskCard(props) {
  return (
    <div className="bg-gray-200 p-10 rounded-lg mt-5">
      <div>Name: {props.name}</div>
      <div>Description: {props.description}</div>
      <div>Dealline: {props.deadline}</div>
      <div>Status: {props.status}</div>
    </div>
  );
}

// using destructing props
export function TaskCardDestructured({ name, description, deadline, status }) {
  return (
    <div className="bg-gray-200 p-10 rounded-lg mt-5">
      <div>Name: {name}</div>
      <div>Description: {description}</div>
      <div>Dealline: {deadline}</div>
      <div>Status: {status}</div>
    </div>
  );
}

export function TaskList() {
  const tasks = [
    new Task(
      "Complete Assignment",
      "Finish JavaScript assignment",
      "2026-07-30",
      "Pending",
    ),
    new Task(
      "Study React",
      "Learn React hooks and components",
      "2026-08-01",
      "In Progress",
    ),
    new Task("Workout", "Go to the gym for 1 hour", "2026-07-29", "Completed"),
    new Task(
      "Project Meeting",
      "Attend the weekly project meeting",
      "2026-07-31",
      "Scheduled",
    ),
  ];
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        {tasks.map((task) => (
          //   <TaskCard
          //     name={task.name}
          //     description={task.description}
          //     deadline={task.deadline}
          //     status={task.status}
          //   />
          <TaskCardDestructured
            name={task.name}
            description={task.description}
            deadline={task.deadline}
            status={task.status}
          />
        ))}
      </div>
    </>
  );
}
