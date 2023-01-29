import React, { useContext } from 'react'
import { MyContext } from '../Context/MyContext'

export const Contact = () => {

    const shareContext = useContext(MyContext);

    return (
        <div>
            <h1>Contact</h1>
            <p>Contact Page</p>
            {/*<p>Shared context <strong>{shareContext.content}</strong></p>*/}
        </div>
    )
}
