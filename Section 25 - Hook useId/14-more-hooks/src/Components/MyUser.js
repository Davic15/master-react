import React, { useState, useEffect } from 'react'
import { useAjax } from '../Hooks/useAjax';

export const MyUser = () => {

    const [url, setUrl] = useState('https://reqres.in/api/users/1')
    const {data, load} = useAjax(url)


    const getId = (e) => {
        let id = parseInt(e.target.value);
        setUrl(`https://reqres.in/api/users/${id}`)
    }

    
    return (
        <div>
            <h1>My User</h1>
            <p>{load ? "Loading" : ""}</p>
            <p>{data?.first_name} {data?.last_name}</p>
            <input type='number' name='id' onChange={ getId } />
        </div>
    )
}
