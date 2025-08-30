import React, { useState, useEffect } from 'react'
import axios from 'axios'

const UserData = ({ userId }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchUser = async () => {
            try {
                setLoading(true)
                const res = await axios.get(`/apiuser/data?user=${userId}`)
                setUser(res.data)
            } catch (err) {
                console.log(err)
                setError('Failed to fetch user data.')
            } finally {
                setLoading(false)
            }
        }

        fetchUser()

    }, [userId])

    if (loading) {
        return <div data-testid="loading">Loading user data...</div>
    }

    if (error) {
        return <div data-testid="error">Error in API</div>
    }

    if (!user) {
        return <div data-testid="nouser">No user found</div>
    }

    return (
        <div>
            <h2>User Profile</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    )
}

export default UserData