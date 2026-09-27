import React, { createContext, useState, useContext } from 'react';
import { pallete } from '../theme';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [colorIndex, setColorIndex] = useState(0);

  const activeTheme = pallete[colorIndex];

  const changeTheme = () => {
    setColorIndex((prevIndex) => (prevIndex + 1) % pallete.length);
  };

  return (
    <ThemeContext.Provider value={{ activeTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);