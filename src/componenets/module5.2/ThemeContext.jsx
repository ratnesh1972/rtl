import React, { createContext, useContext, useState } from 'react'

const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
    const [theme, settheme] = useState('light')

    const toggleTheme = () => {
        settheme((prevTheme) => prevTheme == 'light' ? 'dark' : 'light')
    }

    < ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
    </ThemeContext.Provider >
}

export const useTheme = () => useContext(ThemeContext)