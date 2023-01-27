import React from 'react';
import { Routes, Route, NavLink, BrowserRouter, Navigate } from "react-router-dom";
import { Articles } from '../Components/Articles';
import { Contact } from '../Components/Contact';
import { Home } from '../Components/Home';
import { Error } from '../Components/Error';
import { Person } from '../Components/Person';
import { ControlPanel } from '../Components/ControlPanel';
import { HomePanel } from '../Components/Panel/HomePanel';
import { Create } from '../Components/Panel/Create';
import { Admin } from '../Components/Panel/Admin';
import { About } from '../Components/Panel/About';

export const MainRouter = () => {
    return (
        <BrowserRouter>
            <h1>Header</h1>
            <hr />

            <nav>
                <ul>
                    <li>
                        <NavLink 
                            to="/home"
                            className={ ({isActive}) => isActive ? "active" : "" }
                        >Home</NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/articles"
                            className={ ({isActive}) => isActive ? "active" : "" }
                        >Articles</NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/contact"
                            className={ ({isActive}) => isActive ? "active" : "" }
                        >Contact</NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/person"
                            className={ ({isActive}) => isActive ? "active" : "" }
                        >Person</NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/panel"
                            className={ ({isActive}) => isActive ? "active" : "" }
                        >Panel</NavLink>
                    </li>
                </ul>
            </nav>
            {/* Components nested routes*/}
            <section className='main-content'>
                <Routes>
                    <Route path='/' element={ <Home/> } />
                    <Route path='/home' element={ <Home /> } />
                    <Route path='/articles' element={ <Articles/> } />
                    <Route path='/contact' element={ <Contact /> } />
                    <Route path='/person/:name/:surname' element={ <Person /> } />
                    <Route path='/person/:name' element={ <Person /> } />
                    <Route path='/person' element={ <Person /> } />
                    <Route path='/redirection' element={ <Navigate to="/person/david/madara" /> } />

                    <Route path='/panel/*' element={ <ControlPanel /> } > 
                        <Route index element={ <HomePanel />} />
                        <Route path='panelhome' element={ <HomePanel />} />
                        <Route path='create' element={ <Create />} />
                        <Route path='admin' element={ <Admin />} />
                        <Route path='about' element={ <About />} />
                    </Route>

                    <Route path='*' element={ <Error /> } />
                </Routes>
            </section>
            <hr />
            <h2>Footer</h2>
        </BrowserRouter>
    )
}
