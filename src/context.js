import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [navColor, setNavColor] = useState(false);

  const handleClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const changeNavColor = () => {
    if (window.scrollY >= 100) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };

  return (
    <AppContext.Provider
      value={{
        handleClick,
        setIsSidebarOpen,
        isSidebarOpen,
        navColor,
        changeNavColor,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider };
