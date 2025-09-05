import React, { createContext, useState } from 'react'

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [theme, settheme] = useState('light')

    const toggleTheme = () => {
        settheme((prevTheme) => (prevTheme == 'light' ? 'dark' : 'light'))
    }

    return (
        < ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

