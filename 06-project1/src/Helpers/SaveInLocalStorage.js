
//* key = name in localStorage, element = the item to save
export const SaveInLocalStorage = (key, element) => {
    //* Get previous element
    let items = JSON.parse(localStorage.getItem(key));
    
    //* Check if this is an array
    if(Array.isArray(items)) {
        //* Add a new element
        items.push(element)
    } else {
        //* Create a new array
        items = [element];
    }

    //* Save in localStorage
    localStorage.setItem(key, JSON.stringify(items));

    //* Return saved object
    return element;
}