import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { PublicLayout } from '../Components/Layout/Public/PublicLayout';
import { Login } from '../Components/User/Login';
import { Signup } from '../Components/User/Signup';

export const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <PublicLayout /> }>
                    <Route index element={ <Login />} />
                    <Route path='login' element={ <Login />} />
                    <Route path='signup' element={ <Signup />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
