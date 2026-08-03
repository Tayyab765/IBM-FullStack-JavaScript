import { create } from "zustand";
import { Task } from "../models/task.js";

export const useTaskStore = create((set) => ({
  myTasks: [
    new Task(1, "Coding", "complete"),
    new Task(2, "Assignment", "incomplete"),
    new Task(3, "Prepare Quiz", "pending"),
    new Task(4, "Reading", "complete"),
  ],

  nextId: 5,

  createNextID: () => {
    set((state) => ({
      nextId: nextId + 1,
    }));
  },

  addTask: (newTask) => {
    set((state) => ({
      myTasks: [newTask, ...state.myTasks],
    }));
  },

  deleteTask: (index) => {
    set((state) => ({
      myTasks: state.myTasks.filter((task, i) => i !== index),
    }));
    {
      console.log(`index ${index} deleted`);
    }
  },

  updateTaskByIndex: (index, updatedTask) => {
    set((state) => ({
      myTasks: state.myTasks.map((task, i) =>
        i === index ? { ...task, ...updatedTask } : task,
      ),
    }));
  },
}));
