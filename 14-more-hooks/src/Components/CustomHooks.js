import React, { useState } from 'react'
import { useCaps } from '../hooks/useCaps'

export const CustomHooks = () => {
    const {state, uppercase, lowercase, concate} = useCaps('david macias');

    return (
        <div>
            <h1>Custom Hooks</h1>
            <h2>{state}</h2>
            <button onClick={ uppercase }>Uppercase</button>
            <button onClick={ lowercase }>Lowercase</button>
            <button onClick={ e => concate(' hola') }>Concate</button>
        </div>
    )
}
