import React, { useContext } from 'react'
import { Routes, Route, NavLink, BrowserRouter } from 'react-router-dom';
import { About } from '../Components/About';
import { Articles } from '../Components/Articles';
import { Contacts } from '../Components/Contacts';
import { Home } from '../Components/Home';
import { Login } from '../Components/Login';
import { ContextWork } from '../Context/Context';

export const AppRouter = () => {

    const {user, setUser} = useContext(ContextWork);

    return (
        <BrowserRouter>
            {/* Navigation Menu */}
            <header className='header'>
                <nav>
                    <div className='logo'>
                        <h2>Learning React Context</h2>
                    </div>
                    <ul>
                        <li>
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/articles'>Articles</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about'>About-us</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contacts'>Contacts</NavLink>
                        </li>
                        
                            {
                                user.hasOwnProperty('nick') && user.nick !== null ? (
                                    <>
                                        <li>
                                            <NavLink to='/'>{user.nick}</NavLink>
                                        </li>
                                        <li>
                                            <a href='#' onClick={ e => {
                                                e.preventDefault();
                                                setUser({});
                                            }}>Log out</a>
                                        </li>
                                    </>
                                ) : (
                                    <li>
                                        <NavLink to='/login'>Login</NavLink>
                                    </li>
                                )
                            }
                            
                        
                    </ul>
                </nav>
            </header>
            
            {/* Routes */}
            <section className='content'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/articles' element={<Articles />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contacts' element={<Contacts />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='*' element={<div> <h1>Page not found</h1></div>} />
                </Routes>
            </section>
        </BrowserRouter>
    )
}
