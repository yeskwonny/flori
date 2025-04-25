import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

//Setting zustand
//Set changes state
export const useAuthStore = create((set) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,
  isUpdateProfile: false,
  isCheckingAuth: true,
  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/check");
      set({ authUser: res.data });
    } catch (error) {
      console.log("Error in checkAuth", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },
  signup: async (data) => {
    set({ isSigningUp: true });
    console.log(data);
    try {
      const res = await axiosInstance.post("/auth/signup", data);
      console.log(res);
      toast.success("Account created succesfully");
      set({ authUser: res.data });
      return true;
    } catch (error) {
      toast.error(error.message);
      console.log(error.response.data);
      return false;
    } finally {
      set({ isSigningUp: false });
    }
  },
  login: async (data) => {
    set({ isLoggingIn: true });
    console.log(data);
    try {
      const res = await axiosInstance.post("/auth/login", data);
      console.log(data);
      toast.success("Login succesfully");
      set({ authUser: res.data });
      return true;
    } catch (error) {
      toast.error("Your username or password is not correct");
      console.log(error.response.data);
      return false;
    } finally {
      set({ isLoggingIn: false });
    }
  },

  logout: async () => {
    try {
      await axiosInstance.post("/auth/logout");
      set({ authUser: null });
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },
}));
