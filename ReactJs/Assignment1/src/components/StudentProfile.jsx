export function StudentProfile() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-200">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-xl pt-16 pb-8 px-6 flex flex-col justify-center items-center">
        <div className="absolute inset-x-0 -top-12 flex justify-center">
          <img
            src="../../public/images.jpeg"
            alt=""
            className="w-24 h-24 rounded-full border-white shadow-lg object-cover"
          />
        </div>
        <div className="font-bold text-blue-600 cursor-pointer text-2xl mb-2.5 ">
          Student Profile
        </div>

        <div className="flex gap-3 border-t border-gray-300 w-full p-2">
          <span className="cursor-pointer">👤</span>
          <div className="cursor-pointer text-gray-500">Name:</div>
          <div className="cursor-pointer">Ali</div>
        </div>
        <div className="flex gap-3 border-t border-gray-300 w-full p-2">
          <span className="cursor-pointer">📖</span>
          <div className="text-gray-500 cursor-pointer">Course:</div>
          <div className="cursor-pointer">React JS</div>
        </div>
        <div className="flex gap-3 border-t border-gray-300 w-full p-2">
          <span className="cursor-pointer">🗺️</span>
          <div className="text-gray-500 cursor-pointer">City:</div>
          <div className="cursor-pointer">Lahore</div>
        </div>
      </div>
    </div>
  );
}
