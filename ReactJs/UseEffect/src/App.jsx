import { useEffect, useState } from "react";

function App() {
  const [counter, setcounter] = useState(0);
  const [loggedIn, setLoggedIn] = useState(true);

  useEffect(() => {
    console.log(`Counter: ${counter}`);
    console.log(`Login: ${loggedIn}`);
  }, [counter, loggedIn]);

  return (
    <div className="center_div">
      <div className="text-7xl mb-5 ">{counter}</div>
      <button
        onClick={() => setcounter((prev) => prev + 1)}
        className="button_style"
      >
        Counter
      </button>
      <button
        onClick={() => setLoggedIn((prev) => false)}
        className="button_style"
      >
        Toggle Login
      </button>
    </div>
  );
}

export default App;
