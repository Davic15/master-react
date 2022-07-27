import React, { useEffect, useRef, useState } from 'react'
import { Employee } from './Employee'

export const Manager = () => {

    const [name, setName] = useState('');
    const [page, setPage] = useState(1)
    const managerInput = useRef();

    const setManager = (e) => {
        setName(e.target.value);
    }
    useEffect(() => {
        console.log('The component was rendered.')
    }, [name, page])

    return (
        <div>
            <h1>Manager name: {name}</h1>
            <input type='text' onChange={setManager} placeholder='Type your name'/>
            <h2>Employee list:</h2>
            <p>Users from jsonplaceholder</p>
            <button onClick={() => { setPage(1) }}>Page 1</button>
            <button onClick={() => { setPage(2) }}>Page 2</button>
            <Employee page={page}/>
        </div>
    )
}
