import React, { useEffect, useReducer } from 'react';
import { GameReducer } from '../Reducers/GameReducer';

const init = () => {
    //* It executes later not when the component is loaded.
    return JSON.parse(localStorage.getItem('games')) || []
}

export const MyGames = () => {

    const [games, dispatch] = useReducer(GameReducer, [], init);

    useEffect(() => {
        localStorage.setItem('games', JSON.stringify(games))
    }, [games])

    const getDataForm = (e) => {
        e.preventDefault();
        let game = {
            id: new Date().getTime(),
            title: e.target.title.value,
            description: e.target.description.value
        };

        console.log(game);
        const action = {
            type: 'create',
            payload: game
        };

        dispatch(action);
        console.log(games)
    }

    const deleteGame = (id) => {
        const action = {
            type: 'delete',
            payload: id
        }
        dispatch(action)
    }

    const editGame = (e, id) => {
        let game = {
            id: id,
            title: e.target.value,
            description: e.target.value
        };
        const action = {
            type: 'update',
            payload: game
        }
        dispatch(action)
    }

    return (
        <div>
            <h1>My Video Games</h1>
            <p>Number of games: {games.length}</p>
            <ul>
                {
                    games.map(game => (
                        <li key={game.id}>
                            {game.title}
                            &nbsp;<button onClick={ e => deleteGame(game.id)}>X</button>
                            <input 
                                type='text' 
                                onBlur={ e => editGame(e, game.id) } 
                                onKeyDown={ e => {
                                    if(e.key === 'Enter') { editGame(e, game.id) }
                                }}
                            />
                        </li>
                    ))
                }
            </ul>
            <h3>Add a new Game</h3>
            <form onSubmit={getDataForm}>
                <input type='text' name='title' placeholder='title' />
                <textarea name='description' placeholder='Description' />
                <input type='submit' value='Save' />
            </form>
        </div>
    )
}
