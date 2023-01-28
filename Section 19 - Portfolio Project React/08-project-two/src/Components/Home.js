import React from 'react'
import { Link } from 'react-router-dom'
import { WorkList } from './WorkList'

export const Home = () => {
    return (
        <div className='home'>
            <h1>Hello I am <strong>Franklin Macias</strong>, and I am a <strong>web developer</strong>.</h1>
            <h2 className='title'>
                I help you with your website and SEO.
                <br/>
                <Link to='/contact'>Contact me</Link>
            
            </h2>
            <section className='last-works'>
                <h2 className='heading'>Some of my projects</h2>
                <p>These are some of my projects.</p>
                
                <WorkList limit="2" />

            </section>
        </div>
    )
}
