import React from 'react'

const MySecondComponent = () => {

    const libros = ['Harry Potter', "Game of Throne", "Clean Code"]
    //const libros = [];

    return (
        <div>
            <h1>Listado de Libros</h1>
            {libros.length >= 1 ? (
                <ul>
                    {
                        libros.map((libro, indice) => {
                            return <li key={indice}>{libro}</li>
                        })
                    }
                </ul>)
            : (<p>No hay libros</p>)}
        </div>
    )
}


export default MySecondComponent;