import React from 'react'
import { Routes, Route, NavLink, BrowserRouter } from 'react-router-dom';
import { Articles } from '../Component/Articles';
import { Contact } from '../Component/Contact';
import { Error404 } from '../Component/Error404';
import { Home } from '../Component/Home';

export const MainRouter = () => {
    return (
        //* Routes configuration
        <BrowserRouter>
            {/* Load components */}
            {/* Here we load components that match with the path */}
            {/* We can define a layout here */}
            <h1>Main Header</h1>
            <hr />
            <nav>
                <ul>
                    <li>
                        <NavLink to="/home">Home</NavLink>
                    </li>
                </ul>
                <ul>
                    <li>
                        <NavLink to="/articles">Articles</NavLink>
                    </li>
                </ul>
                <ul>
                    <li>
                        <NavLink to="/contact">Contacts</NavLink>
                    </li>
                </ul>
            </nav>
            <section className='main-content'>
                <Routes>
                    {/* We can define html in the element tag */}
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/articles" element={<Articles />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<Error404 />} />
                </Routes>
            </section>
            {/* We can define a layout here too */}
        </BrowserRouter>
    )
}
