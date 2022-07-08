import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export const ControlPanel = () => {
  return (
    <div>
        <h1>Contol Panel</h1>
        <p>Options</p>
        <nav>
            <ul>
                <li>
                    <NavLink to='/panel/home'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/panel/create'>Create</NavLink>
                </li>
                <li>
                    <NavLink to='/panel/manage'>Manage</NavLink>
                </li>
                <li>
                    <NavLink to='/panel/aboutus'>About US</NavLink>
                </li>
            </ul>
        </nav>
        <div>
            {/* Load here the sub routes. */}
            <Outlet />
        </div>
        <hr />
    </div>
  )
}
