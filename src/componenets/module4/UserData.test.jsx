import { fireEvent, render, screen } from "@testing-library/react";
import { test, expect, vi } from 'vitest'
import axios from 'axios'
import UserData from "./UserData";

// mock axios module
vi.mock('axios')

test('first shows loading and then user data', async () => {
    // mock api response
    axios.get.mockResolvedValueOnce({
        data: {
            id: 1,
            name: "Ratnesh",
            email: "ratnesh@example.com",
        }
    });

    render(<UserData userId={1} />);

    // assert loading state
    expect(screen.getByTestId('loading')).toBeInTheDocument();

    // wait for userData to appear (using findBy queries)
    const userName = await screen.findByText(/Name: Ratnesh/i)
    expect(userName).toBeInTheDocument();

    const userEmail = await screen.findByText(/Email: ratnesh@example.com/i)
    expect(userEmail).toBeInTheDocument();

    // assert loading state is gone
    expect(screen.queryByTestId('loading')).not.toBeInTheDocument();
})

test('first shows loading and then no user found', async () => {
    // mock api response
    axios.get.mockResolvedValueOnce({
        data: null
    });

    render(<UserData userId={1} />);

    // assert loading state
    expect(screen.getByTestId('loading')).toBeInTheDocument();

    // wait for nouser to appear
    const noUser = await screen.findByTestId('nouser');
    expect(noUser).toBeInTheDocument();

    // assert loading state is gone
    expect(screen.queryByTestId('loading')).not.toBeInTheDocument();
})

test('first shows loading and then error', async () => {
    // mock api response
    axios.get.mockRejectedValueOnce(new Error('Error in API'));

    render(<UserData userId={1} />);

    // assert loading state
    expect(screen.getByTestId('loading')).toBeInTheDocument();

    // wait for nouser to appear
    const noUser = await screen.findByTestId('error');
    expect(noUser).toBeInTheDocument();

    // assert loading state is gone
    expect(screen.queryByTestId('loading')).not.toBeInTheDocument();
})