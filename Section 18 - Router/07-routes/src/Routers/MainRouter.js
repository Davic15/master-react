import React from 'react';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { Articles } from '../Components/Articles';
import { Contact } from '../Components/Contact';
import { Home } from '../Components/Home';
import { Error } from '../Components/Error';

export const MainRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Home/> } />
                <Route path='/home' element={ <Home /> } />
                <Route path='/articles' element={ <Articles/> } />
                <Route path='/contact' element={ <Contact /> } />
                <Route path='*' element={ <Error /> } />
            </Routes>
        </BrowserRouter>
    )
}
