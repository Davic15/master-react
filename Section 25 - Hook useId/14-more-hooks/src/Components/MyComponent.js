import React, {useId} from 'react'

export const MyComponent = () => {
    const id = useId();
    console.log(id)
    return (
        <div>
            <h1>Hook useId</h1>
            <input id={id} type='text' placeholder='Name' name='name' />
        </div>
    )
}
