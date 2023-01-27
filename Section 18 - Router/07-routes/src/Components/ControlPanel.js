import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export const ControlPanel = () => {
  return (
    <div>
        <h1>Control Panel</h1>
        <p>Options</p>
        <nav>
            <ul>
                <li>
                    <NavLink to="/panel/panelhome">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/panel/create">Create</NavLink>
                </li>
                <li>
                    <NavLink to="/panel/admin">Admin</NavLink>
                </li>
                <li>
                    <NavLink to="/panel/about">About</NavLink>
                </li>
            </ul>
        </nav>
        <div>
            {/* Load nested routes */}
            <Outlet />
        </div>
    </div>
  )
}
