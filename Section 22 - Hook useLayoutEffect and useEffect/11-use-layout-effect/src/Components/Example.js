import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

export const Example = () => {
    const [show, setShow] = useState(false);
    const box = useRef();
    const button = useRef();

    useLayoutEffect(() => {
        console.log('useLayoutEffect: Component loaded!!');
    }, []);

    useEffect(() => {
        console.log('useEffect: Component loaded!!');
        if(box.current == null) return;
        const {bottom} = button.current.getBoundingClientRect();
        box.current.style.top = `${bottom + 45}px`;
        box.current.style.left = `${bottom + 45}px`;
    }, [show])

    return (
        <div>
            <h1>useEffect and useLayoutEffect</h1>
            <button ref={button} onClick={() => setShow(prev => !prev)}>Show message</button>
            {show && (
                <div id='box' ref={box}>
                    Hi, I am a message {show}
                </div>
            )}

        </div>
    )
}
