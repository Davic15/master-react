import React, { useId } from 'react'

export const MyComponent = () => {

    const id = useId();
    const id2 = useId();
    console.log(id)
    console.log(id2)

    return (
        <div>
            <h1>Hook useId</h1>
            <input id={id} name="name" placeholder='Name' />
        </div>
    )
}
