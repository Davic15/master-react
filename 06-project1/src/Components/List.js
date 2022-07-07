import React, { Fragment, useEffect, useState } from "react";
import { SaveInLocalStorage } from "../Helpers/SaveInLocalStorage";
import { Edit } from "./Edit";

export const List = ({listState, setListState}) => {

  //const [ listState, setListState ] = useState([]);

  const [ editMovie, setEditMovie ] = useState(0);

  useEffect(() => {
    getMovies();
  }, [])

  const getMovies = () => {
    let movies = JSON.parse(localStorage.getItem("movies"));
    movies === null && (movies = [])
    setListState(movies);
    return movies;
  }

  const deleteMovie = (id) => {
    //* Get movies from the storage
    let moviesSaved = getMovies();
    //* Filter movies to delete one.
    let newArrayMovies = moviesSaved.filter(movie => movie.id !== parseInt(id));
    //* Update listState
    setListState(newArrayMovies)
    //* Update movies in localStorage
    localStorage.setItem('movies', JSON.stringify(newArrayMovies))

  }

  return (
    <Fragment>
      { listState != null ? listState.map(movie => {
          return (
            <article key={movie.id} className="movie-item">
              <h3 className="title">{movie.title}</h3>
              <p className="description">{movie.description}</p>
              <button className="edit" onClick={ () => setEditMovie (movie.id) }>Edit</button>
              <button className="delete" onClick={ () => deleteMovie (movie.id) }>Delete</button>
              {/* Edit form */}
              { editMovie === movie.id && (<Edit movie={movie} />)}
            </article>
          );
        })
        : <h2>No Movies to show</h2>
      }
    </Fragment>
  );
};
