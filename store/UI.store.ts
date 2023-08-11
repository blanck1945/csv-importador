import { create } from "zustand";

export const useUiStore = create((set) => ({
  showAddForm: false,
  toogleAddForm: () =>
    set((state) => ({
      ...state,
      showAddForm: !state.showAddForm,
    })),
}));
