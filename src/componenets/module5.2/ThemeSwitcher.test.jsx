import { fireEvent, render, screen } from "@testing-library/react";
import { test, expect, vi, describe } from 'vitest'
import ThemeSwitcher from './ThemeSwitcher'
import { ThemeProvider } from "./ThemeContext"


describe('Tests for ThemeSwitcher component', () => {

    test('renders with correct default theme', () => {
        render(<ThemeSwitcher />, { wrapper: ThemeProvider })

        expect(screen.getByText(/Current Theme: light/i)).toBeInTheDocument()
    })
})