import React from 'react'
import { SideBar } from './SideBar'
import { Header } from '../Private/Header'
import { Outlet } from 'react-router-dom'

export const PrivateLayout = () => {
    return (
        <>
            { /* Layout */ }
            <Header />

            { /* Main Content */ }
            <section className="layout__content">
                <Outlet />
            </section>

            { /* Side Bar */ }
            <SideBar />
        </>
    )
}
