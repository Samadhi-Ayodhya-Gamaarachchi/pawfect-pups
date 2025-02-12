import { createContext, useContext, useState } from "react";

// Create context
const UIContext = createContext();

// Context provider
export function UIProvider({ children }) {
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <UIContext.Provider value={{ showSearchBox, setShowSearchBox, setDrawerOpen }}>
      {children}
    </UIContext.Provider>
  );
}

// Custom hook to use context
export function useUIContext() {
  return useContext(UIContext);
}
