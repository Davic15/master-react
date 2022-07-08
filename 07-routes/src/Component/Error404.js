import React from 'react'
import { Link } from 'react-router-dom'

export const Error404 = () => {
    return (
        <div>
            <h1>Page not found</h1>
            <Link to="/">Back Home</Link>
        </div>
    )
}
