import React from 'react'
import { Routes, Route, NavLink, BrowserRouter, Navigate } from 'react-router-dom';
import { Articles } from '../Component/Articles';
import { Contact } from '../Component/Contact';
import { ControlPanel } from '../Component/ControlPanel';
import { Error404 } from '../Component/Error404';
import { Home } from '../Component/Home';
import { AboutUs } from '../Component/Panel/AboutUs';
import { Create } from '../Component/Panel/Create';
import { HomePanel } from '../Component/Panel/HomePanel';
import { Manage } from '../Component/Panel/Manage';
import { Person } from '../Component/Person';


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
                        <NavLink 
                            to="/home"
                            className={({isActive}) => isActive ? 'active' : ""}
                        >Home</NavLink>
                    </li>
                </ul>
                <ul>
                    <li>
                        <NavLink 
                            to="/articles"
                            className={({isActive}) => isActive ? 'active' : ""}
                        >Articles</NavLink>
                    </li>
                </ul>
                <ul>
                    <li>
                        <NavLink 
                            to="/contact"
                            className={({isActive}) => isActive ? 'active' : ""}
                        >Contacts</NavLink>
                    </li>
                </ul>
                <ul>
                    <li>
                        <NavLink 
                            to="/panel"
                            className={({isActive}) => isActive ? 'active' : ""}
                        >Control Panel</NavLink>
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
                    <Route path="/person/:name/:surname" element={<Person />} />
                    <Route path="/person/:name" element={<Person />} />
                    <Route path="/person" element={<Person />} />
                    <Route path={"/redirect"} element={<Navigate to="/person/david/macias" />} />
                    
                    <Route path={"/panel/*"} element={<ControlPanel />}>
                        <Route path="home" element={<HomePanel />} />
                        <Route path="create" element={<Create />} />
                        <Route path="manage" element={<Manage />} />
                        <Route path="aboutus" element={<AboutUs />} />
                    </Route>
                    
                    <Route path="*" element={<Error404 />} />
                </Routes>
            </section>
            {/* We can define a layout here too */}
        </BrowserRouter>
    )
}
