import { WelcomeMessage } from "./components/Welcome.jsx";
import { StudentProfile } from "./components/StudentProfile.jsx";
import { Counter } from "./components/Counter.jsx";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen bg-gray-200">
        <WelcomeMessage />
      </div>
      <StudentProfile />
      <Counter />
    </>
  );
}

export default App;
