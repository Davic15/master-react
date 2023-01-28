import React, { useState, useEffect, useRef } from 'react'

export const Example = () => {
    const [countGreetings, setCountGreetings] = useState(0);
    const greetingsStack = useRef(countGreetings);

    useEffect(() => {
        greetingsStack.current = countGreetings;
        setTimeout(() => {
            console.log('Messages stack:' + greetingsStack.current)
        }, 2000)
    }, [countGreetings])

    const sentGreetings = (e) => {
        setCountGreetings(countGreetings + 1);
    }
    return (
        <div>
            <h1>Example with useRef</h1>
            <h2>Greetings sent: {countGreetings}</h2>
            <button onClick={sentGreetings}>Send Greetings</button>
            <hr />
        </div>
    )
}
