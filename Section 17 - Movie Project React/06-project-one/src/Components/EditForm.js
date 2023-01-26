import React from 'react'

export const EditForm = ({movie, getMovies, setEdit, setListState}) => {
    const componentTitle = 'Edit movie';

    const saveEditedMovie = (e, id) => {
        e.preventDefault();
        const target = e.target;
        //* Find the index
        const savedMovies = getMovies();
        const index = savedMovies.findIndex(movie => movie.id === id);

        //* Create an object with that index
        const movieToEdit = {
            id,
            title: target.title.value,
            description: target.description.value
        }
        
        //* Update the element with that index
        savedMovies[index] = movieToEdit;

        //* Saved in localStorage
        localStorage.setItem('movies', JSON.stringify(savedMovies));

        //* Update states
        setListState(savedMovies);
        setEdit(0);

    }

    return (
        <div className='edit-form'>
            <h3 className="title">{componentTitle}</h3>
            <form onSubmit={ e => saveEditedMovie(e, movie.id)}>
                <input 
                    type="text" 
                    name="title" 
                    className="edit-title" 
                    defaultValue={movie.title} 
                />
                <textarea 
                    name="description" 
                    defaultValue={movie.description}
                    className="description-edit" 
                />
                <input 
                    type="submit" 
                    className="edit" 
                    value="Update"
                />
            </form>
        </div>
    )
}
