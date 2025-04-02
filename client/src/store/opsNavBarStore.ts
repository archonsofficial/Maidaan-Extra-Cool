import { create } from "zustand";

type opsNavBarStore = {
  currentOpt: string;
  setOpt: (newOpt: string) => void;
};

export const opsNavBarStore = create<opsNavBarStore>()((set) => ({
  currentOpt: "overview",
  setOpt: (newOpt) => set(() => ({ currentOpt: newOpt })),
}));
