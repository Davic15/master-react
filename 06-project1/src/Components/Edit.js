import React from 'react'

export const Edit = ({movie, getMovies, setEditMovie, setListState}) => {
    const componentTitle = "Edit Movie"

    const saveEditedmovie = (e, id) => {
        e.preventDefault();
        //* Get the event target
        let target = e.target;

        //* Get the index of the object to update
        const moviesSaved = getMovies();
        const index = moviesSaved.findIndex(movie => movie.id === id);
        
        //* Create an object with that index
        let movieUpdated = {
            id: id,
            title: target.title.value, 
            description: target.description.value,
        }
        
        //* Update the element using the index
        moviesSaved[index] = movieUpdated;

        //* Save in localStorage
        localStorage.setItem("movies", JSON.stringify(moviesSaved));
        //* Update states
        setListState(moviesSaved);
        setEditMovie(0);

    }

    return (
        <div className='edit_form'>
            <h3 className='title'>{componentTitle}</h3>
            <form onSubmit={ e => saveEditedmovie(e, movie.id) }>
                <input 
                    type="text"
                    name="title"
                    className='title'
                    defaultValue={movie.title} 
                />
                <textarea
                    name="description"
                    defaultValue={movie.description}
                    className="description" 
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
