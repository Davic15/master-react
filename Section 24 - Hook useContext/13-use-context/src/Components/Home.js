import React, { useContext } from 'react'
import { MyContext } from '../Context/MyContext';

export const Home = () => {

    const {user, setUser} = useContext(MyContext);

    return (
        <div>
            <h1>Home</h1>
            <p>Home Page</p>
            <p>Nombre: {user.name} {user.web}</p>
            {/*<p>Shared context <strong>{shareContext.title}</strong></p>*/}
        </div>
    )
}
