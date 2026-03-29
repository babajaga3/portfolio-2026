import type { RefObject } from "react";
import { create } from "zustand";

type TabsStore = {
  activeTab: RefObject<HTMLDivElement | null> | null;
  setActiveTab: (activeTab: RefObject<HTMLDivElement | null> | null) => void;
};

export const useTabs = create<TabsStore>((set) => ({
  activeTab: null,
  setActiveTab: (activeTab) => set({ activeTab }),
}));
