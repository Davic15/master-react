import React from 'react'
import { works } from '../Data/works'

export const Portfolio = () => {
    return (
        <div className='page'>
            <h1 className='heading'>Portfolio</h1>
            {
                works.map(work => (
                    <article>
                        <h2>{work.name}</h2>
                    </article>
                ))
            }
        </div>
    )
}
