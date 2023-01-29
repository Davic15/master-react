/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { Routes, Route, NavLink, BrowserRouter } from 'react-router-dom'
import { About } from '../Components/About';
import { Articles } from '../Components/Articles';
import { Contact } from '../Components/Contact';
import { Home } from '../Components/Home';
import { Login } from '../Components/Login';
import { Error } from '../Components/Error';
import { MyContext } from '../Context/MyContext';

export const AppRouter = () => {

    const {user, setUser} = useContext(MyContext);

    return (
        <BrowserRouter>
            {/* Nvaigation Menu */}
            <header className='header'>
                <nav>
                    <div className='logo'>
                        <h2>Learning Context in React</h2>
                    </div>
                    <ul>
                        <li>
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/articles'>Articles</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about'>About</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact'>Contact</NavLink>
                        </li>

                        { user.hasOwnProperty('username') && user.username != null ? (
                            <>
                                <li>
                                    <NavLink to='/'>{user.username}</NavLink>
                                </li>
                                <li>
                                    <a href='#' onClick={ e => {
                                        e.preventDefault(); 
                                        setUser({})}}>Logout</a>
                                </li>
                            </>
                            ): (
                            <li>
                                <NavLink to='/login'>Login</NavLink>
                            </li>
                        )}

                    </ul>
                </nav>
            </header>
            {/* Routes */}
            <section className='content'>
                <Routes>
                    <Route path='/' element={ <Home />} />
                    <Route path='/home' element={ <Home /> } />
                    <Route path='/articles' element={ <Articles /> } />
                    <Route path='/about' element={ <About /> } />
                    <Route path='/contact' element={ <Contact /> } />
                    <Route path='/login' element={ <Login /> } />
                    <Route path='*' element={ <Error /> } />
                </Routes>
            </section>
        </BrowserRouter>
    )
}
