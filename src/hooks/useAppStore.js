import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAppStore = create(
  persist(
    (set, get) => ({
      isLogin: true,
      setIsLogin: (value) => set({ isLogin: value }),
      user:[],
      setUser:(value)=>set({user:[...value]})
    }),
    {
      name: "user",
      partialize: (state) => ({
        user: state.user,
      }),
    }
  )
);
