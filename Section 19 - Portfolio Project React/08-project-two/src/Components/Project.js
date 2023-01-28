import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { works } from '../Data/works';

export const Project = () => {
    const params = useParams();
    const [project, setProject] = useState({});

    useEffect(() => {
        let project = works.filter(work => work.id === params.id);
        setProject(project[0])
    }, []);



    return (
        <div className='page page-work'>
            <div className='mask'>
                <img src={"/images/" + project.id +".png"} alt={project.name} />
            </div>
            <h1 className='heading'>{project.name}</h1>
            <p>{project.technologies}</p>
            <p>{project.description}</p>
            <a href={project.url} target='_blank' rel="noreferrer">Go to the project</a>
        </div>
    )
}
