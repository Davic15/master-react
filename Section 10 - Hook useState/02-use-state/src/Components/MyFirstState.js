import React, { useState } from 'react'

export const MyFirstState = () => {


    /*
    This doesn't work
    let name = 'David Macias';
    const handleClick = () => {
        name = 'Franklin Avellan';
    }*/

    //* useState Hook
    //* Variable, function to update the variable and default value.
    //* It updates just the value and no re-render the page again.
    const[name, setName] = useState('David Macias');

    const handleChangeName = (e, newName) => {
        setName(newName);
        console.log(e.target.value)
    }


    
    return (
        <div>
            <h3>Component: My First State</h3>
            <strong className='label'>{ name }</strong>

            <br/>
            <button onClick={ e => handleChangeName(e, 'Ariadna Macias') }>Change Name</button>
            <br/>
            <input type="text" placeholder='Change Name' onChange={ e => handleChangeName(e, e.target.value) }/>
        </div>
    )
}
