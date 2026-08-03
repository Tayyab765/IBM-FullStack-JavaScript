import { create } from "zustand";

export const useDialogStore = create((set) => ({
  showDialog: false,
  selectedTaskIndex: null,

  enableEditDialog: (taskIndex) => {
    set(() => ({
      showDialog: true,
      selectedTaskIndex: taskIndex,
    }));
  },

  disableEditDialog: () => {
    set(() => ({
      showDialog: false,
      selectedTaskIndex: null,
    }));
  },
}));
