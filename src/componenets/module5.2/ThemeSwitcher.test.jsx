import { fireEvent, render, screen } from "@testing-library/react";
import { test, expect, vi, describe } from 'vitest'
import ThemeSwitcher from './ThemeSwitcher'
import { ThemeProvider } from "./ThemeContext"
import userEvent from "@testing-library/user-event";


describe('Tests for ThemeSwitcher component', () => {

    test('renders with correct default theme', () => {
        render(<ThemeSwitcher />, { wrapper: ThemeProvider })

        expect(screen.getByText(/Current Theme: light/i)).toBeInTheDocument()
    })

    test('toggles the theme correctly', async () => {
        render(<ThemeSwitcher />, { wrapper: ThemeProvider })
        const user = userEvent.setup()

        expect(screen.getByText(/Current Theme: light/i)).toBeInTheDocument()

        await user.click(screen.getByRole('button', { name: /toggle theme/i }))

        expect(screen.getByText(/Current Theme: dark/i)).toBeInTheDocument()
    })
})