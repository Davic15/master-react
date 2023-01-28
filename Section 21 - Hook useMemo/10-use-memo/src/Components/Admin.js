import React, {useState, useRef, useEffect, useCallback} from 'react'
import { Workers } from './Workers'

export const Admin = () => {

    const [name, setName] = useState('');
    const [page, setPage] = useState(1);
    const adminInput = useRef();

    const setManager = (e) => {
        setName(adminInput.current.value);
    }

    useEffect(() => {
        console.log('re render Admin')
    }, [page, name]);

    const showMessage = useCallback(() => {
        console.log('I am a message from Admin component.')
    }, [page]);

    return (
        <div>
            <h1>CEO: {name}</h1>
            <input type='text' ref={adminInput} onChange={setManager} placeholder='Type your name' />
            <h2>Employee List</h2>
            <p>Users are managed by {name}, and come from jsonplaceholder</p>
            <button onClick={() => { setPage(1) }}>Page 1</button>
            <button onClick={() => { setPage(2) }}>Page 2</button>
            <Workers page={page} message={showMessage} />
        </div>
    )
}
