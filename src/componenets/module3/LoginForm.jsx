import React, { useState } from 'react'

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const submitForm = (e) => {
        e.preventDefault()

        if (username == 'username' && password == 'password') {
            setMessage('Login Successfull')
        } else {
            setMessage('Invalid Credentials')
        }
    }

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="username">Username:</label>
            <input
                type="text"
                name="username"
                id="username"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
            {message && <p data-testid="login-message">{message}</p>}
        </form>
    )
}

export default LoginForm