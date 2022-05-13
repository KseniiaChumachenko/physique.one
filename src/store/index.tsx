import React, { ReactNode, useState } from "react";
import { createContext, useContext } from "react";

type ActionType = { label: ReactNode; onClick: () => void } | null;

interface ScreenStore {
  pageName: string;
  handlePageName(n: string): void;
  action: ActionType;
  setAction(p: ActionType): void;
  navigationOpen: boolean;
  handleToggleNavigation(): void;
  handleCloseNavigation(): void;
}

export const StoreContext = createContext<ScreenStore>(null as any);

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [pageName, setPageName] = useState("");
  const [action, setAction] = useState<ActionType>(null);
  const [navigationOpen, setNavigationOpen] = useState(false);

  const handleToggleNavigation = () => setNavigationOpen(!navigationOpen);
  const handleCloseNavigation = () => setNavigationOpen(false);

  return (
    <StoreContext.Provider
      value={{
        pageName,
        handlePageName: setPageName,
        action,
        setAction,
        navigationOpen,
        handleToggleNavigation,
        handleCloseNavigation,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export function useStore() {
  return useContext(StoreContext);
}
