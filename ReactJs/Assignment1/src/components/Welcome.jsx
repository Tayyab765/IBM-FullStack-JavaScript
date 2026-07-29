export function WelcomeMessage() {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-white p-10 rounded-lg ">
        <div className="text-3xl text-blue-500 font-bold">React Learning</div>
        <div className="text-gray-500 p-2 m-2">
          Welcome to my first React project
        </div>
        <div className="bg-green-600 p-2 text-white font-semibold rounded-lg mt-2 cursor-pointer hover:bg-green-700">
          Happy Coding 🚀
        </div>
      </div>
    </>
  );
}


