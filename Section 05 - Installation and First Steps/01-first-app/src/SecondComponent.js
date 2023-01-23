import React from 'react'

export const SecondComponent = () => {
    //const books = ['Harry Potter', 'La Divina Comedia', 'Clean Code'];
    const books = []
    return (
        <div>
            <p>Book List</p> 
            { books.length >= 1 ? ( 
                <ul>
                { books.map((book, index) => {
                    return <li key={index}>{ book }</li>
                }) }
                </ul>)
            : (<p>No books</p>)
            }
        </div>
    )
}
