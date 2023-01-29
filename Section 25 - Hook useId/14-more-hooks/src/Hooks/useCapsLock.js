import {useState} from 'react';
export const useCapsLock = (text) => {

    const [myText, setMyText] = useState(text);


    /* Text in uppercase */
    const capsLockOn = () => {
        setMyText(text.toUpperCase());
    }

    /* Text in lowercase*/
    const capsLockOff = () => {
        setMyText(text.toLowerCase());
    }

    /* Concatenate */
    const concat = (add) => {
        setMyText(text + add);
    }

    return {
        state: myText,
        capsLockOn,
        capsLockOff,
        concat
    };
}