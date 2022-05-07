import React, { useEffect, useState } from 'react';
import { projectData } from './projects';
import githubSvg from '../../assets/images/github.svg';

function Project() {
  // const [githubData, setGithubData] = useState();

  // const getGithubData = () => {
  //   return fetch(`https://api.github.com/users/craigmjensen/starred`)
  //     .then((response) => response.json())
  //     .then((data) => setGithubData(data));
  // };

  // useEffect(() => {
  //   getGithubData();
  // }, []);

  // console.log(githubData);

  return (
    <div className="row">
      {projectData.map((data, i) => (
        <div className="column" key={i}>
          <div className="card">
            <div className="image-container">
              <a href={data.deployed} target="_blank" rel="noreferrer">
                <img
                  className="project-image"
                  src={data.image}
                  alt={data.description}
                />
              </a>
            </div>
            <div className="content">
              <a
                href={data.github}
                title="Github repo link"
                target="_blank"
                rel="noreferrer"
              >
                <img className="gitIcon" src={githubSvg} alt="GitHub Repo" />
              </a>
              <a
                href={data.deployed}
                title={data.title}
                target="_blank"
                rel="noreferrer"
              >
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
