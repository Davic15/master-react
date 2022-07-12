import React from 'react'
import { Link } from 'react-router-dom';
import { ListProjects } from './ListProjects';

export const Home = () => {
    return (
        <div className='home'>
            <h1>
                Hello, I am <strong>Franklin Macias</strong>. Nice to meet you. 
                I am an experience in front-end developer and have good knowledge of HTML, CSS, JavaScript (ES6), React.js, Node.js, MongoDB and Express.js.
            </h1>
            <h2 className='title'>
                On a personal level, I am highly motivated, result oriented, self-driven, hardworking, fast learner and constantly seeking to improve my skills, 
                and I am an avid user of the latest front-end development tools. 
                <Link to="/contact">Contact me</Link>
            </h2>
            <section className='latest-project'>
                <h2 className='heading'>My projects</h2>
                <p>My previous works</p>
                <ListProjects limit="2" />
            </section>
        </div>
    )
}
