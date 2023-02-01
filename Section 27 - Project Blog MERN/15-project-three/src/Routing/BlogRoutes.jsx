import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { Footer } from '../Components/Layout/Footer';
import { Header } from '../Components/Layout/Header';
import { Navigation } from '../Components/Layout/Navigation';
import { SideBar } from '../Components/Layout/SideBar';
import { Articles } from '../Components/Pages/Articles';
import { Create } from '../Components/Pages/Create';
import { Home } from '../Components/Pages/Home';

export const BlogRoutes = () => {
    return (
        <BrowserRouter>
            {/* Layout */}
            <Header />
            <Navigation />
            {/* Content and routes*/}
            <section id='content' className='content'>
                <Routes>
                    <Route path='/' element={ <Home /> } />
                    <Route path='/home' element={ <Home /> } />
                    <Route path='/articles' element={ <Articles />} />
                    <Route path='/create' element={ <Create /> } />
                </Routes>
            </section>

            <SideBar />
            <Footer />

        </BrowserRouter>
    )
}
