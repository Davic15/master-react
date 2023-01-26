export const saveInLocalStorage = (key, element) => {
    //* Check the localStorage
    let items = JSON.parse(localStorage.getItem(key));
    console.log(items)
    //* Check if this is an array
    if(Array.isArray(items)) {
        //* Add a new element into the array.
        items.push(element);
    } else {
        //* Create a new array.
        items = [element]
    }
    //* Save in localStorage
    localStorage.setItem(key, JSON.stringify(items));
    return element;
}