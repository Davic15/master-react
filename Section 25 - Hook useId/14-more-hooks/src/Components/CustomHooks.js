import React from 'react'
import { useCapsLock } from '../Hooks/useCapsLock'

export const CustomHooks = () => {

    const {state, capsLockOff, capsLockOn, concat} = useCapsLock("david macias");

    return (
        <div>
            <h1>Custom Hooks</h1>
            <h2>{state}</h2>
            <button onClick={ capsLockOn }>Caps Lock on</button>
            <button onClick={ capsLockOff }>Caps Lock off</button>
            <button onClick={ e => concat(' Hola') }>Concat</button>
        </div>
    )
}
