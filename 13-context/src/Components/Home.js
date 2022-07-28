import React, { useContext } from 'react'
import { ContextWork } from '../Context/Context'

export const Home = () => {

    const {user, setUser} = useContext(ContextWork);

    return (
        <div>
            <h1>Home</h1>
            <p>Home page</p>
            <p>User: {user.name} {user.web}</p>
        </div>
    )
}
