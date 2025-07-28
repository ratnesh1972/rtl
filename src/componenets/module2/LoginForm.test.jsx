import { render, screen } from '@testing-library/react'
import { test, expect } from 'vitest'
import LoginForm from './LoginForm'

test('login form elements renders correctly', () => {
    render(<LoginForm />)

    //getByRole
    expect(screen.getByRole('textbox', { name: /username/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument()

    //getByLabelText
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument()

    //getByPlaceholderText
    expect(screen.getByPlaceholderText(/enter username/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/enter password/i)).toBeInTheDocument()

    //queryByText (to assert absence)
    expect(screen.queryByText(/Login Successfull/i)).not.toBeInTheDocument()

    //queryByTestId
    expect(screen.queryByTestId('login-message')).not.toBeInTheDocument()
})