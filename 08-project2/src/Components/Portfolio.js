import React from 'react'
import { Link } from 'react-router-dom';
import { ListProjects } from './ListProjects';

export const Portfolio = () => {
    return (
        <div className='page'>
            <h1 className='heading'>Portfolio</h1>
            <ListProjects />
        </div>
    )
}
