import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen bg-gray-200">
        <div className="bg-white p-10 rounded-lg flex flex-col justify-center items-center ">
          <div className="font-bold text-2xl text-blue-500 p-2 ">
            Counter App
          </div>
          <div className="text-8xl bg-blue-50 p-5 rounded-full mt-5">
            {count}
          </div>
          <div className="flex gap-10 p-2 mt-5">
            <div
              className="bg-green-500 p-2 rounded-lg text-white cursor-pointer hover:bg-green-600"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              Increament
            </div>
            <div
              className="bg-red-500 p-2 rounded-lg text-white cursor-pointer hover:bg-red-600 "
              onClick={() => {
                setCount(count - 1);
              }}
            >
              Decrement
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
