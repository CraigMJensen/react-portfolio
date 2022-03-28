import React from 'react';
import Project from '../../Project';
import projects from '../../../assets/projects.json';

function Portfolio() {
  return (
    <div className="portfolio-page">
      <div className="title">
        <p>portfolio</p>
      </div>
      <div className="project-container">
        {projects.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            github={project.github}
            deployed={project.deployed}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
