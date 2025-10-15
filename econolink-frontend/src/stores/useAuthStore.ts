import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface User {
  id: string;
  email: string;
  name: string;
}

interface IAuthStore {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const useAuthStore = create<IAuthStore>()(
  immer((set) => ({
    user: null,
    setUser: (user) => {
      set((state) => {
        state.user = user;
      });
    },
  }))
);
