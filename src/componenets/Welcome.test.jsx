import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react';
import Welcome from './Welcome';

test('true is true', () => {
    expect(true).toBe(true)
})

test('welcome is true', () => {
    render(<Welcome name="Ratnesh" />)
    const greeting = screen.getByText('Hello, Ratnesh!')
    expect(greeting).toBeInTheDocument()
})