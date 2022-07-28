import React, { useEffect, useLayoutEffect, useState, useRef } from 'react'

export const Example = () => {

    const [show, setShow] = useState(false)

    const box = useRef();
    const buttonRef = useRef();

    /*useLayoutEffect(() => {
        console.log('useLayoutEffect: Component loaded...');
    }, [])*/

    useEffect(() => {
        console.log('useEffect: Component loaded...');
        if (box.current === null) return;
        const { bottom } = buttonRef.current.getBoundingClientRect();
        console.log(bottom)
        box.current.style.top = `${bottom + 45}px`;
        box.current.style.left = `${bottom + 45}px`;

    }, [show])

    return (
        <div>
            <h1>Example useEffect and useLayoutEffect</h1>

            <button ref={buttonRef} onClick={() => setShow(prev => !prev)} >Show message</button>

            {show && (
                <div id="box" ref={box}>I am a message.</div>
            )}


        </div>
    )
}
