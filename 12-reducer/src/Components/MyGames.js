import React, { useReducer, useEffect } from 'react'
import { GameReducer } from '../Reducers/GameReducer';

const init = () => {
    return JSON.parse(localStorage.getItem('Games')) || [];
}

export const MyGames = () => {

    const [games, dispatch]  = useReducer(GameReducer, [], init)

    useEffect(() => {
        localStorage.setItem('Games', JSON.stringify(games));
    }, [games]);

    const getDataFrom = (e) => {
        e.preventDefault();
        let game = {
            id: new Date().getTime(),
            title: e.target.title.value,
            description: e.target.description.value
        }
        const action = {
            type: 'add',
            payload: game
        };

        dispatch(action);
        console.log(games)
    }

    const deleteGame = (id) => {
        const action = {
            type: 'delete',
            payload: id
        };
        dispatch(action)
    }

    const editGame = (e, id) => {
        let game = {
            id: id,
            title: e.target.value,
            description: e.target.value
        }
        const action = {
            type: 'edit',
            payload: game
        };
        dispatch(action)
    }

    return (
        <div>
            <h1>These are my Video Games.</h1>

            <p>Video Games: {games.length}</p>
            <ul>
                {games.map(game => {
                    return (
                        <li key={game.id}>
                            {game.title}
                            &nbsp;<button onClick={ e => deleteGame(game.id) }>X</button>
                            <input type='text' onBlur={ e => editGame(e, game.id) } onKeyPress={ e => { if(e.key === 'Enter') {editGame(e, game.id)}} }/>
                        </li>
                    )
                })}
            </ul>
            <h3>Add video game</h3>
            <form onSubmit={getDataFrom}>
                <input type='text' name='title' placeholder='Title' />
                <textarea name='description' placeholder='Description' />
                <input type='submit' value='Save'></input>
            </form>
        </div>
    )
}
