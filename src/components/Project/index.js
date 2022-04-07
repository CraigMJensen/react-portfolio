import React from 'react';
import { projectData } from './projects';
import githubSvg from '../../assets/images/github.svg';

function Project() {
  return (
    <div className='row'>
    
      {projectData.map((data, i) => (
        <div className="column" key={i}>
          <div className="card">
            <div className="image-container">
              <a href={data.deployed} target='_blank' rel='noreferrer' >
                <img className='project-image' src={data.image} alt={data.description} />
              </a>
            </div>
            <div className="content">
              <a href={data.github} title={data.title} target='_blank' rel='noreferrer'>
                <img className='gitIcon' src={githubSvg} alt="GitHub Repo" />
                <h3 className="card-title">{data.title}</h3>
              </a>
            </div>
          </div>
        </div>
      ))}
      
      </div>
  );
}

export default Project;
