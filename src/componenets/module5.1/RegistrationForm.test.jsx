import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { test, expect } from 'vitest'
import RegistrationForm from './RegistrationForm'

test('submits the form successfully with valid data', async () => {
    render(<RegistrationForm />)

    const user = userEvent.setup()

    await user.type(screen.getByLabelText('Firstname:'), 'xyz')
    await user.type(screen.getByLabelText('Lastname:'), 'abc')
    await user.type(screen.getByLabelText('Email:'), 'xyz@example.com')
    await user.type(screen.getByLabelText('Password:'), 'xyz@abc')
    await user.click(screen.getByLabelText('Accept our policy?:'))
    await user.click(screen.getByText(/Register/i))

    expect(screen.getByTestId('success-message')).toHaveTextContent('Registration successful!')
    expect(screen.queryByText(/Firstname is required/i)).not.toBeInTheDocument()
})

test('display validation errors for empty fields', async () => {
    render(<RegistrationForm />)

    const user = userEvent.setup()

    await user.click(screen.getByText('Register'))

    expect(screen.queryByText(/Firstname is required/i)).toBeInTheDocument()
    expect(screen.queryByText(/Last name is required/i)).toBeInTheDocument()
    expect(screen.queryByText(/Email is required/i)).toBeInTheDocument()
    expect(screen.queryByText(/Password is required/i)).toBeInTheDocument()
    expect(screen.queryByText(/You must agree to our terms and policy/i)).toBeInTheDocument()
})

test('display validation error for invalid email', async () => {
    render(<RegistrationForm />)

    const user = userEvent.setup()

    await user.type(screen.getByLabelText('Firstname:'), 'xyz')
    await user.type(screen.getByLabelText('Lastname:'), 'abc')
    await user.type(screen.getByLabelText('Email:'), 'xyz@.com')
    await user.type(screen.getByLabelText('Password:'), 'xyz@abc')
    await user.click(screen.getByLabelText('Accept our policy?:'))
    await user.click(screen.getByText(/Register/i))

    expect(screen.queryByText(/Email is invalid/i)).toBeInTheDocument()
})