import React from 'react';
import { projectData } from './projects';
import githubSvg from '../../assets/images/github.svg';

function Project() {
 console.log(projectData);
  
  
  return(
    <div>
      {projectData.map((data, key) => (
        <div className='card' key={key}>
      <div className='image-container'>
        <a href={data.deployed}>
          <img src={data.image} alt={data.description} 
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