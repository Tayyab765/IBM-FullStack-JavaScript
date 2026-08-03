import { useState } from "react";

import { useTaskStore } from "./store/taskStore.js";
import { AddFormPanel } from "./components/AddFormPanel.jsx";
import { TaskCard } from "./components/TaskCard.jsx";
import { TaskDisplayPanel } from "./components/TaskDisplayPanel.jsx";

function App() {
  return (
    <>
      <div className="flex flex-col relative bg-green-200 items-center mt-3 max-w-md mx-auto">
        
        <div className="w-full">
          <AddFormPanel />
        </div>
        <div className="flex-1 overflow-y-auto ">
          <TaskDisplayPanel />
        </div>
      </div>
    </>
  );
}

export default App;
