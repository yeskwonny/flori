import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";
import { useAuthStore } from "./useAuthStore";

export const useJournalStore = create((set, get) => ({
  journal: [],
  isCreatingJournal: false,
  isJournalLoading: false,

  //get journal
  //create journal
  postJournal: async (formData) => {
    set({ isCreatingJournal: true });
    try {
      const res = await axiosInstance.post("/journal", formData);
      set((state) => ({
        journal: [...state.journal, res.data],
      }));
      toast.success("Journal saved!");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isCreatingJournal: false });
    }
  },
}));
