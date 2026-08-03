import { useDialogStore } from "../store/editDialogStore";

export function EditTask() {
  const closeDialogBox = useDialogStore((state) => state.enableEditDialog);

  return (
    <div>
      <div className="absolute flex flex-col justify-center items-center inset-0">
        <div className="bg-white flex flex-col w-full gap-3 ">
          <div className="flex flex-col justify-center items-center">
            Edit Task
          </div>
          <div>
            <input
              type="text"
              placeholder="Title"
              className="border p-1 rounded-lg"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Description"
              className="border p-1 rounded-lg"
            />
          </div>
          <div className="flex gap-3">
            <button className="flex-1 bg-blue-500 rounded-lg cursor-pointer py-2 ">
              Save
            </button>
            <button className="flex-1 bg-red-500 rounded-lg cursor-pointer py-2 ">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
