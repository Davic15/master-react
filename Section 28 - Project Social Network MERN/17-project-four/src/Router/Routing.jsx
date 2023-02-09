import React from 'react';
import { Routes, Route, BrowserRouter, Navigate, Link } from 'react-router-dom';
import { PrivateLayout } from '../Components/Layout/Private/PrivateLayout';
import { PublicLayout } from '../Components/Layout/Public/PublicLayout';
import { Feed } from '../Components/Publication/Feed';
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

                <Route path='/social' element={ <PrivateLayout /> }>
                    <Route index element={ <Feed /> } />
                    <Route path='feed' element={ <Feed />} />
                </Route>

                <Route path='*' element={
                    <>
                        <p>
                            <h1>Error 404</h1>
                            <Link to='/'>Go back home</Link>
                        </p>  
                    </>
                } />
            </Routes>
        </BrowserRouter>
    )
}
