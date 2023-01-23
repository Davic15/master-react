import React from 'react'

export const EventComponent = () => {

    const handleClick = (e, name) => {
        alert('You clicked me!.');
        console.log(name);
        console.log(e)
    }

    function handleDoubleClick(e) {
        alert('You double clicked me!.')
        console.log('You double clicked me!.')
    }

    /*const handleMouseEnter = (e, action) => {
        console.log(`Mouse ${action}`);
    }

    const handleMouseLeave = (e, action) => {
        console.log(`Mouse ${action}`);
    }*/

    const handleMouseAction = (e, action) => {
        console.log(`Mouse ${action}`);
    }

    const handleFocus = (e) => {
        console.log('You are inside input.');
    }

    const handleBlur = (e) => {
        console.log('You are outside input');
    }

    return (
        <div>
            <h1>Events in React</h1>
            <p>
                {/* Click */}
                <button onClick={ e => handleClick(e, 'David') }>Click me</button>
            </p>
            <p>
                {/* Double Click */}
                <button onDoubleClick={ handleDoubleClick }>Double click me</button>
            </p>
            <div id='box' onMouseEnter={ e => handleMouseAction(e, 'enter') } onMouseLeave={ e => handleMouseAction(e, 'leave') }>
                {/* Mouse Enter */}
                Mouse over.
            </div>

            <p>
                <input type="text" onFocus={ handleFocus } onBlur={ handleBlur } placeholder="Type your name" />
            </p>
           
        </div>
    )
}
