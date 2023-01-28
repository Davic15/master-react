import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { Contact } from '../Components/Contact';
import { Curriculum } from '../Components/Curriculum';
import { Home } from '../Components/Home';
import { Footer } from '../Components/Layout/Footer';
import { HeaderNav } from '../Components/Layout/HeaderNav';
import { Portfolio } from '../Components/Portfolio';
import { Project } from '../Components/Project';
import { Services } from '../Components/Services';

export const MyRoutes = () => {
    return (
        <BrowserRouter>
            { /* Header and Nav here*/}
            <HeaderNav />
            { /* Content */ }
            <section className='content'>
                <Routes>
                    <Route path='/' element={ <Navigate to="/home" /> } />
                    <Route path='/home' element={ <Home /> } />
                    <Route path='/portfolio' element={ <Portfolio /> } />
                    <Route path='/services' element={ <Services /> } />
                    <Route path='/curriculum' element={ <Curriculum /> } />
                    <Route path='/contact' element={ <Contact /> } />
                    <Route path='/project/:id' element={ <Project /> } />
                    <Route path='*' element={ 
                            <div className='page'>
                                <h1 className='heading'>Error 404</h1> 
                            </div>
                        } 
                    />
                </Routes>
            </section>

            { /* Footer */ }
            <Footer />
        </BrowserRouter>
    )
}
