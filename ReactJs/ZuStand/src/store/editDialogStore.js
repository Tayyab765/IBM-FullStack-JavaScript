import { create } from "zustand";

export const useDialogStore = create((set) => ({
  showDialog: false,

  enableEditDialog: () => {
    set((state) => ({
      showDialog: true,
    }));
  },

  disableEditDialog: () => {
    set((state) => ({
      showDialog: false,
    }));
  },
}));
