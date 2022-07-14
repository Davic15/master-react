import React, { useEffect, useRef, useState } from 'react'

export const Example = () => {
    const [greetings, setGreetings] = useState(0);
    const greetingsStack = useRef(greetings);

    useEffect(() => {
        greetingsStack.current = greetings;
        setTimeout(() => {
            console.log('Greetings stack: ' +greetingsStack.current);
        }, 2000)
    }, [greetings])

    const sendGreetings = (e) => {
        console.log("Sent greetings");
        setGreetings(greetings + 1);
    }

    return (
        <div>
            <h1>Example with useRef</h1>

            <h2>Greetings: {greetings}</h2>
            <button onClick={ sendGreetings }>Send Greetings</button>
            <hr />
        </div>
    )
}
