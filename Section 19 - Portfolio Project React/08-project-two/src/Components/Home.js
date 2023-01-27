import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <div>
            <h1>Hello I am Franklin Macias, and I am a web developer.</h1>
            <h2>
                I help you with your website and SEO.
                <br/>
                <Link to='/contact'>Contact me</Link>
            
            </h2>
            <section className='last-works'>
                <h2>Some of my projects</h2>
                <p>These are some of my projects.</p>
                <div className='works'>

                </div>
            </section>
        </div>
    )
}
