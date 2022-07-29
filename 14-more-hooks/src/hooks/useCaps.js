import { useState } from "react";
export const useCaps = (text) => {

    const [myText, setMyText] = useState('David Macias');

    //* Text in uppercase
    const uppercase = () => {
        setMyText(text.toUpperCase());
    }

    //* Text in lowercase
    const lowercase = () => {
        setMyText(text.toLowerCase());
    }

    //* Text to concate
    const concate = (added) => {
        setMyText(text+added);
    }

    return {
        state: myText,
        uppercase,
        lowercase,
        concate
    };

}