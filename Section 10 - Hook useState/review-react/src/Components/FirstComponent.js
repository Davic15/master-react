import React, {useState} from 'react'

export const FirstComponent = () => {
    const [name, setName] = useState('David Macias');
    let web = 'google.com.ec';
    let courses = ['CSS', 'HTML', 'JS'];

    const handleChangeName = (newName) => {
        setName(newName)
    }


    return (
        <div>
            <h2>My First Component</h2>
            <p>My name is: <strong className={name.length >= 4 ? 'green' : 'red' }>{name}</strong></p>
            <p>My Website is: {web}</p>
            <input type="text" onChange={ e => handleChangeName(e.target.value) } placeholder="Change name" />
            <button onClick={ e => { console.log("Value saved in the state: " + name) } }>Show state</button>
            <button onClick={ e => handleChangeName('Ariadna Macias') }>Change Name</button>
            <ul>
                { courses.map((course, index) => {
                    return <li key={index}>{ course }</li>
                })}
            </ul>
        </div>
    )
}
