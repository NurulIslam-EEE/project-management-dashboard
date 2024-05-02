import { create } from "zustand";

const useStore = create((set) => ({
  tasks: [],
  setTasks: (task) =>
    set(() => {
      tasks: task;
    }),
}));
