import React from "react";
import { createContext, useContext } from "react";
import { RootStore } from "./RootStore";

export const StoreContext = createContext<RootStore>(null as any);

export const StoreProvider = ({ children }: { children: React.ReactNode }) => (
  <StoreContext.Provider value={new RootStore()}>
    {children}
  </StoreContext.Provider>
);

export function useStore() {
  return useContext(StoreContext);
}
