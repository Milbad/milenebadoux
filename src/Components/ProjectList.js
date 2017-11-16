import React from 'react';
import {projects} from './data';


export default function ProjectList () {

    return(
      <div className='container-content-projects'>
        <h2>My Work</h2>
        {projects.map((project) => (
          <div key={project.name} className = 'project'>
          <div className='project-skills' key={project.name}>
            <h3>{project.name}</h3>
            <div className='skills'>{project.skills}</div>
          </div>
          <div className='project-description'>
            <div alt= {project.name} className= 'icon-project' style={{backgroundImage: `url(${project.image})`}}></div>
            <div className='project-description-text'>
              <div>{project.description}</div>
              <div className='project-url'>
                <a href={project.url} target='_blank' rel='noopener noreferrer' >{project.url}</a>
              </div>
            </div>
          </div>
        </div>
        ))}
    </div>
  )
}
