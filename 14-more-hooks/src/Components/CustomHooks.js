import React from 'react'
import { useCaps } from '../hooks/useCaps'

export const CustomHooks = () => {
    const {uppercase, lowercase, concate} = useCaps('david Macias')
    console.log(concate("hiii"))
    return (
        <div>
            <h1>Custom Hooks</h1>
        </div>
    )
}
