import React from 'react';
import githubSvg from '../../assets/images/github.svg';

function Project({ title, description, image, github, deployed }) {
  return(
    <div>
      <div className='card'>
      <div className='image-container'>
        <a href={deployed}>
          <img src={image} alt={description} />
        </a>
      </div>
      <div className='content'>
        <a href={github} title={description}>
          <img
            src={githubSvg}
            alt='GitHub Repo'
          />
          <h3 className='card-title'>{title}</h3>
        </a>
      </div>
    </div>
    </div>
  )
}

export default Project;