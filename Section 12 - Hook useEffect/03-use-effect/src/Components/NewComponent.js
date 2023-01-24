import React, { useState, useEffect } from 'react'
import { ShowComponent } from './ShowComponent';

export const NewComponent = () => {

    const [user, setUser] = useState('David Macias');
    const [date, setDate ] = useState('15-08-1988');
    const [counter, setCounter] = useState(0);

    const modifyUser = (e) => {
        setUser(e.target.value);
        console.log('User changed');
    }

    const changeDate = () => {
        setDate(Date.now());
    }

    //* Executes just once.
    useEffect(() => {
        console.log('Component Loaded or a change has been made.');
    }, []);

    //* Excutes when the user is updated.
    useEffect(() => {
        setCounter(counter + 1);
        console.log('Component Loaded or a change has been made.');
        console.log('Counter: ' + counter);
    }, [user, date]);

    return (
        <div>
            <h1>useEffect Hook</h1>
            <strong>{user}</strong>
            <strong className={ counter >= 10 ? 'label label-green' : 'label'}>{date}</strong>
            <p>
                <input type="text" onChange={ modifyUser } placeholder="Change name" />
                <button onClick={changeDate}>Change Date</button>
            </p>
            {user === 'David' && <ShowComponent/> }
        </div>
    )
}
