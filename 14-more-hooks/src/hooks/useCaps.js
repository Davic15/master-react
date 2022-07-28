export const useCaps = (text) => {

    //* Text in uppercase
    const uppercase = () => {
        return text.toUpperCase();
    }

    //* Text in lowercase
    const lowercase = () => {
        return text.toLowerCase();
    }

    //* Text to concate
    const concate = (added) => {
        return text+added;
    }

    return {
        uppercase,
        lowercase,
        concate
    };

}