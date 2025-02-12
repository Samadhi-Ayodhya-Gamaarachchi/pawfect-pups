import { createContext, useContext, useState } from "react";

export const UIContext = createContext();
export const useUIContext = () => useContext(UIContext);

export const UIProvider = ({ children }) => {  // Fixed 'Children' to 'children'
    const [drawerOpen, setDrawerOpen] = useState(false);  // Fixed typo in 'setDrawerOpen'

    const value = {
        drawerOpen,
        setDrawerOpen  // Fixed function name
    };

    return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};
