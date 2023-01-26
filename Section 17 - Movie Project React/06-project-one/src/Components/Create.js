import React, { useState } from 'react'
import { saveInLocalStorage } from '../helpers/SaveInLocalStorage';

export const Create = ({setListState}) => {
    const titleComponent = "Add Movie";

    const [movieState, setMovieState] = useState({
        title: '',
        description: ''
    })

    const {title, description} = movieState;

    const getDataForm = (e) => {
        e.preventDefault();
        // get data
        const target = e.target;
        const title = target.title.value;
        const description = target.description.value;
        //* Create a movie object
        let movie = {
            id: new Date().getTime(),
            title: title,
            description: description
        }
        setMovieState(movie);
        //* Update state
        setListState(elements => {
            if(Array.isArray(elements)) return [...elements, movie] 
            else return [movie] 
        })
        //* Save in LocalStorage
        saveInLocalStorage('movies', movie);
    }

    

    return (
        <div className="add">
            <h3 className="title">{titleComponent}</h3>
            <strong>
                {(title && description) && "Movie created: " + title}
            </strong>
            <form onSubmit={getDataForm}>
                <input 
                    type="text" 
                    id="title"
                    name="title"
                    placeholder="Title" 
                />
                <textarea 
                    id="description"
                    name="description"
                    placeholder="Description"></textarea>
                <input 
                    type="submit" 
                    id="save"
                    value="Send" 
                />
            </form>
        </div>
    )
}
