import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { test, expect } from 'vitest'
import LoginForm from './LoginForm'

test('allow user to fail login by fireEvent', () => {
    render(<LoginForm />)

    const submitButton = screen.getByRole('button', { name: /login/i })
    fireEvent.click(submitButton)

    const message = screen.getByTestId('login-message')
    expect(message).toBeInTheDocument()

    expect(message).toHaveTextContent('Invalid Credentials')

})

test('allow a user to login successfully', async () => {
    const user = userEvent.setup()

    render(<LoginForm />)

    const usernameEle = screen.getByRole('textbox', { name: /username/i })
    const passwordEle = screen.getByLabelText(/password/i)
    const submitButton = screen.getByRole('button', { name: /login/i })

    expect(usernameEle).toBeInTheDocument()
    expect(passwordEle).toBeInTheDocument()

    await user.type(usernameEle, 'username')
    await user.type(passwordEle, 'password')

    await user.click(submitButton)

    const message = await screen.findByTestId('login-message')
    expect(message).toBeInTheDocument()
    expect(message).toHaveTextContent('Login Successfull')
})

test('allow a user to fail login', async () => {
    const user = userEvent.setup()

    render(<LoginForm />)

    const usernameEle = screen.getByRole('textbox', { name: /username/i })
    const passwordEle = screen.getByLabelText(/password/i)
    const submitButton = screen.getByRole('button', { name: /login/i })

    expect(usernameEle).toBeInTheDocument()
    expect(passwordEle).toBeInTheDocument()

    await user.type(usernameEle, 'wronguser')
    await user.type(passwordEle, 'wrongpass')

    await user.click(submitButton)

    const message = await screen.findByTestId('login-message')
    expect(message).toBeInTheDocument()
    expect(message).toHaveTextContent('Invalid Credentials')
})

