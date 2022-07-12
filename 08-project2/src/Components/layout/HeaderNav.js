import React from 'react'
import { NavLink } from 'react-router-dom';

export const HeaderNav = () => {
    return (
        <header className='header'>
            <div className="logo">
                <span>F</span>
                <h3>Franklin David Macias Avellan</h3>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/home" className={({isActive}) => isActive ? "active" : ""}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio" className={({isActive}) => isActive ? "active" : ""}>Portfolio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/services" className={({isActive}) => isActive ? "active" : ""}>Services</NavLink>
                    </li>
                    <li>
                        <NavLink to="/curriculum" className={({isActive}) => isActive ? "active" : ""}>Curriculum</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({isActive}) => isActive ? "active" : ""}>Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
