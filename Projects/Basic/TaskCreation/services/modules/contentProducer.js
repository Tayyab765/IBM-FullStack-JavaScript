import { Task } from "../models/Task.js";
import { my_tasks } from "../resources/data.js";

export const get_dashboard_content = () => {
  return `${my_tasks
    .map(
      (task) =>
        `<div class="bg-gray-200 p-10 rounded">
      <div class="font-bold text-lg">${task.title}</div>
      <div class="mt-3 text-sm"><strong>Description:</strong> ${task.description}</div>
      <div class="mt-2 text-sm"><strong>Start Date:</strong> ${task.start_date}</div>
      <div class="mt-2 text-sm"><strong>Deadline:</strong> ${task.deadline}</div>
      <div class="mt-3 text-center font-semibold">${task.status}</div>
    </div>`,
    )
    .join("")}`;
};

export const get_view_content = () => {
  return "View Content";
};

export const get_add_content = () => {
  return "Add Content";
};

export const get_edit_content = () => {
  return "Edit Content";
};

export const get_delete_content = () => {
  return "Delete Content";
};
