import React from 'react'
import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import Welcome from "./Welcome"

test('renders Welcome component with correct greeting', () => {
    render(<Welcome name='Ratnesh' />)
    const welcomeEle = screen.getByText(/Hello, Ratnesh/i)
    expect(welcomeEle).toBeInTheDocument()
})

test('renders Welcome component with correct greeting with debug', () => {
    render(<Welcome name='Ratnesh' />)
    screen.debug()
    const welcomeEle = screen.getByText(/Hello, Ratnesh/i)
    expect(welcomeEle).toBeInTheDocument()
})