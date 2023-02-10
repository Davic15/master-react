import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../../../Hooks/useAuth'
import { Header } from './Header'

export const PublicLayout = () => {

    const { auth } = useAuth();

    return (
        <>
            { /* Layout */ }
            <Header />

            { /* Main Content */ }
            <section className="layout__content">
                {!auth._id ? 
                    <Outlet />
                : <Navigate to='/social'/> }
            </section>
        </>
    )
}
