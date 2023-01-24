import React, { useEffect } from 'react'

export const ShowComponent = () => {
    
    useEffect(() => {
        //* Component is mounted.
        alert('The component ShowComponent is mounted.');

        //* Component is unmounted.
        return () => {
            alert('The component ShowComponent is unmounted.');
        };
    }, []);

    return (
        <div>
            <hr />
            <h3>Greetings David, how are you?.</h3>
            <button onClick={ e=> {alert('Welcome')}}>Show Alert</button>
        </div>
    )
}
