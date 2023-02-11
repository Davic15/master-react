import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../Hooks/useAuth';

export const Logout = () => {
    const navigate = useNavigate();
    const {setAuth, setCounters} = useAuth()

    useEffect(() => {
        //* Clear the localStoraga
        localStorage.clear();

        //* Set global values to 0
        setAuth({});
        setCounters({});

        //* Navigate to Login
        navigate('/login');
    })

    return (
        <h1>Log out</h1>
    )
}
