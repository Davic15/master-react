import React, { useState } from "react";
import { SaveInLocalStorage } from "../Helpers/SaveInLocalStorage";

export const Create = ({setListState}) => {

    const titleComponent = "Add Movie";
    const [ movieState , setMovieState ] = useState({
        title: '',
        description: ''
    });

    const { title, description } = movieState;

    const getDatosForm = (e) => {
        e.preventDefault();

        /* Get data from form */
        let target = e.target;
        let title = target.title.value;
        let description = target.description.value;

        /* Create an object about the movie to save */
        let movie = {
            id: new Date().getTime(),
            title: title,
            description: description
        };

        //* Save State
        setMovieState(movie);

        //* Update state
        setListState(element => {
            return [...element, movie];
        });

        //* Save in LocalStorage
        SaveInLocalStorage("movies", movie);

    }

    

    return (
        <div className="add">
            <h3 className="title">{ titleComponent }</h3>
            <strong>
                { (title && description) && "You create the movie: " + title}
            </strong>
            <form onSubmit={ getDatosForm }>
                <input 
                    type="text" 
                    id="title"
                    name="title"
                    placeholder="Title" 
                />
                <textarea 
                    id="description"
                    name="description"
                    placeholder="Description"
                ></textarea>
                <input 
                    type="submit" 
                    id="save"
                    value="Save" 
                />
            </form>
        </div>
    );
};
