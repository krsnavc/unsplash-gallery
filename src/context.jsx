import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

function getInitialMode() {
  const preferMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const storeMode = localStorage.getItem('darkTheme');
  if (storeMode) {
    return storeMode === 'true';
  }
  return preferMode;
}

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialMode());

  const [searchTerm, setSearchTerm] = useState('space');

  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    const body = document.querySelector('body');
    body.classList.toggle('dark-theme', newTheme);

    localStorage.setItem('darkTheme', newTheme);
  };

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkTheme);
  }, []);

  return (
    <AppContext.Provider
      value={{ toggleTheme, searchTerm, setSearchTerm, isDarkTheme }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
