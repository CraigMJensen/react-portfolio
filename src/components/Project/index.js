import React from 'react';
import { projectData } from './projects';
import githubSvg from '../../assets/images/github.svg';

function Project() {
 
  
  
  return(
    <div>
      {projectData.map((data, i) => (
        <div className='card' key={i}>
      <div className='image-container'>
        <a href={data.deployed}>
          <img src={data.image} alt={data.description} width="600rem"
           />
        </a>
      </div>
      <div className='content'>
        <a href={data.github} title={data.description}>
          <img
            src={githubSvg}
            alt='GitHub Repo'
          />
          <h3 className='card-title'>{data.title}</h3>
        </a>
      </div>
    </div>
      ))}
      
    </div>
  )
  
}


export default Project;