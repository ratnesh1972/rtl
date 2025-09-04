import { useTheme } from './ThemeContext'

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme()
    return (
        <div>
            <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff', padding: '20px' }}>
                <p>Current Theme: {theme}</p>
                <button onClick={toggleTheme}>Toggle Theme</button>
            </div>
        </div>
    )
}

export default ThemeSwitcher