import React, { useState } from 'react'
import { ThemeContext } from './ThemeContext'

export const ThemeProvider = ({ children }) => {
    const [theme, settheme] = useState('light')

    const toggleTheme = () => {
        settheme((prevTheme) => prevTheme == 'light' ? 'dark' : 'light')
    }

    < ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
    </ThemeContext.Provider >
}