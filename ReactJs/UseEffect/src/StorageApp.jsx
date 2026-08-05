import React, { useEffect, useState } from "react";

export default function StorageApp() {
  const [name, setname] = useState("");

  function clickHandler() {
    localStorage.setItem("name", "Tayyab");
    console.log(`Data stored`);
  }

  useEffect(() => {
    const fetchedName = localStorage.getItem("name");
    console.log(`name receved: ${fetchedName}`);
    setname((pre) => fetchedName);
  }, []);

  return (
    <div className="center_div">
      <div>
        <button onClick={() => clickHandler()} className="button_style">
          Store Data
        </button>
        <div>{name}</div>
      </div>
    </div>
  );
}
