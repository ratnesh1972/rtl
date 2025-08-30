import React, { useState } from 'react'

const RegistrationForm = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAgreed, setIsAgreed] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const validate = () => {
        const errors = {};

        if (!firstname) errors.firstname = 'Firstname is required';
        if (!lastname) errors.lastname = 'Last name is required';
        if (!email) errors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(email)) errors.email = 'Email is invalid';
        if (!password) errors.password = 'Password is required';
        else if (password.length < 6) errors.password = 'Password length should be greater than 6 characters.';
        if (!isAgreed) errors.agreement = 'You must agree to our terms and policy';

        return errors;
    }

    const submitForm = (e) => {
        e.preventDefault()
        const validateErrors = validate();
        const isErrorsAvailable = Object.keys(validateErrors).length > 0

        if (isErrorsAvailable) {
            setErrors(validateErrors);
            setSubmitted(false);
        } else {
            setErrors({});
            setSubmitted(true)
        }
    }

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="firstname">Firstname:</label>
            <input
                id="firstname"
                type="text"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
            />
            {errors.firstname && <span className="error">{errors.firstname}</span>}
            <label htmlFor="lastname">Lastname:</label>
            <input
                id="lastname"
                type="text"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
            />
            {errors.lastname && <span className="error">{errors.lastname}</span>}
            <label htmlFor="email">Email:</label>
            <input
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <span className="error">{errors.email}</span>}
            <label htmlFor="password">Password:</label>
            <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <span className="error">{errors.password}</span>}
            <label htmlFor="isAgreed">Accept our policy?:</label>
            <input
                id="isAgreed"
                type="checkbox"
                value={isAgreed}
                onChange={(e) => setIsAgreed(e.target.value)}
            />
            {errors.isAgreed && <span className="error">{errors.agreement}</span>}
            <button type="submit">Register</button>
            {submitted && <p data-testid="success-message">Registration successful!</p>}
        </form>
    )
}

export default RegistrationForm;