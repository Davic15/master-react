import React, { useState } from 'react'

export const Search = ({listState, setListState}) => {

    const [ search, setSearch ] = useState('');
    const [ notFound, setNotFound ] = useState(false);

    const searchMovie = (e) => {
        //* Create a new state and update
        setSearch(e.target.value)

        //* Filter the search
        let moviesFound = listState.filter(movie => {
            return movie.title.toLowerCase().includes(search.toLocaleLowerCase());
        });
        
        if(search.length <= 1 || moviesFound <=0) {
            moviesFound = JSON.parse(localStorage.getItem("movies"));
            setNotFound(true);
        } else {
            setNotFound(false);
        }

        //* Update the sate
        setListState(moviesFound);
    }

    return (
        <div className="search">
            <h3 className="title">Search: {search}</h3>
            { (notFound === true && search.length > 1) && (
                <span className="not-found">No movies found</span>
            )}
            <form>
                <input 
                    type="text" 
                    id="search_field" 
                    name="search"
                    autoComplete='off'
                    onChange={ searchMovie }
                />
                <button id="search">Search</button>
            </form>
        </div>
    )
}
