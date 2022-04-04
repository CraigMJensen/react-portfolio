import React from 'react';
import resume from '../../../assets/Resume.pdf'

function Resume() {
  return (
    <div className='wrapper'>
      <div>
        <p className='resumeDownload'>
          Download my <a href={resume} download="resume.pdf">Resume</a>
        </p>
      </div>
      <div>
        <p>Front-end Skills</p>
        <ul>
          <li>React</li>
          <li>HTML</li>
          <li>Handlebars</li>
          <li>CSS</li>
          <li>SASS</li>
          <li>Bootstrap</li>
          <li>JavaScript</li>
          <li>JQuery</li>
          <li>Responsive Design</li>
        </ul>
        <p>Back-end Skills</p>
        <ul>
          <li>Express</li>
          <li>MySql</li>
          <li>MongoDB</li>
          <li>Node</li>
          <li>REST</li>
          <li>API</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
