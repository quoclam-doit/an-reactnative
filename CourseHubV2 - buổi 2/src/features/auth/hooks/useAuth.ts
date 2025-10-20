import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

// Types
interface User {
  id: number;
  name: string;
  email: string;
}

interface AuthState {
  // State
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;

  // Actions
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  setLoading: (isLoading: boolean) => void;
}

// Zustand store with persistence
export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      // Initial State
      user: null,
      isAuthenticated: false,
      isLoading: false,

      // Login Action
      login: async (email: string, password: string) => {
        set({ isLoading: true });

        try {
          // Giả lập API call
          await new Promise((resolve) => setTimeout(resolve, 1000));

          // Kiểm tra credentials đơn giản
          if (email && password.length >= 6) {
            const user: User = {
              id: 1,
              name: email.split("@")[0],
              email: email,
            };

            set({
              user,
              isAuthenticated: true,
              isLoading: false,
            });
          } else {
            throw new Error("Email hoặc mật khẩu không hợp lệ");
          }
        } catch (error) {
          set({ isLoading: false });
          throw error;
        }
      },

      // Register Action
      register: async (name: string, email: string, password: string) => {
        set({ isLoading: true });

        try {
          // Giả lập API call
          await new Promise((resolve) => setTimeout(resolve, 1000));

          // Validate
          if (name && email && password.length >= 6) {
            const user: User = {
              id: 1,
              name: name,
              email: email,
            };

            set({
              user,
              isAuthenticated: true,
              isLoading: false,
            });
          } else {
            throw new Error("Vui lòng điền đầy đủ thông tin");
          }
        } catch (error) {
          set({ isLoading: false });
          throw error;
        }
      },

      // Logout Action
      logout: async () => {
        set({ isLoading: true });

        try {
          // Giả lập API call
          await new Promise((resolve) => setTimeout(resolve, 500));

          set({
            user: null,
            isAuthenticated: false,
            isLoading: false,
          });
        } catch (error) {
          set({ isLoading: false });
          throw error;
        }
      },

      // Set Loading
      setLoading: (isLoading: boolean) => {
        set({ isLoading });
      },
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
