import create from "zustand";

// Zustand store for managing toasts
export const useToastStore = create((set) => ({
  toasts: [],

  // Function to add a new toast
  addToast: (message, type = "info", duration = 3000) => {
    const id = new Date().getTime();
    const newToast = { id, message, type };
    set((state) => ({ toasts: [...state.toasts, newToast] }));

    // Remove the toast after the specified duration
    setTimeout(() => {
      set((state) => ({
        toasts: state.toasts.filter((toast) => toast.id !== id),
      }));
    }, duration);
  },

  // Function to remove a toast
  removeToast: (id) => {
    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id !== id),
    }));
  },
}));
