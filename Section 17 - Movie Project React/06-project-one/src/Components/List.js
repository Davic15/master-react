import React, { useEffect, useState } from 'react'
import { EditForm } from './EditForm';

export const List = ({listState, setListState}) => {

    //*const [listState, setListState] = useState([]);

    const [edit, setEdit] = useState(0);

    useEffect(() => {
        getMovies();
    }, [])
    
    const getMovies = () => {
        let movies = JSON.parse(localStorage.getItem('movies'));
        setListState(movies);
        return movies;
    }

    const handleDeleteMovie = (id) => {
        //* Get movies
        const savedMovies = getMovies();
        //* Filter movie to delete
        const newMovieList = savedMovies.filter(movie =>  movie.id !== parseInt(id))
        //* Update the state
        setListState(newMovieList)
        //* Update data in localStorage
        localStorage.setItem('movies', JSON.stringify(newMovieList));

    }

    return (
        <>
            {listState != null ? 
                listState.map(movie => {
                    return (
                        <article key={movie.id} className="movies-item">
                            <h3 className="title">{movie.title}</h3>
                            <p className="description">{movie.description}</p>
                            <button className="edit" onClick={ () => { setEdit(movie.id) } }>Edit</button>
                            <button className="delete" onClick={ () => handleDeleteMovie(movie.id) }>Delete</button>

                            {/* Edit Form */}
                            {edit === movie.id && (
                                <EditForm 
                                    movie={movie} 
                                    getMovies={getMovies} 
                                    setEdit={setEdit}
                                    setListState={setListState}
                                />
                            )}
                        </article>
                    )
                })
                : <h2>No Movies to show</h2>
            }
        </>
    )
}
