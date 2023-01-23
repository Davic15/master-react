import React from 'react'

export const MyComponent = () => {
    
    const name = 'David';
    const web = 'https://davic15.github.io/';

    let user = {
        name: 'David',
        surname: 'Macias',
        web: 'https://davic15.github.io/'
    }

    console.log(name)
    
    return (
        <>
            <h2>New Component</h2>
            <h3>User Data</h3>
            <ul>
                <li>Name: <strong>{ user.name }</strong></li>
                <li>Surname: { user.surname }</li>
                <li>Web: { user.web }</li>
            </ul>
            <ul>
                <li>React</li>
                <li>Angular</li>
                <li>Vue</li>
            </ul>
        </>
    )
}
