import React from 'react';
import resume from '../../../assets/Resume.pdf'

function Resume() {
  return (
    <div className='wrapper'>
      <div>
        <p className='resumeDownload'>
          <a href={resume} download="resume.pdf">Click Here to download my resume!</a>
        </p>
      </div>
      <div className='skills'>
        <div className='frontEndSkills'>
        <p>Front-end Skills</p>
        <ul className='list'>
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
        </div>
        <div className='backEndSkills'>
        <p>Back-end Skills</p>
        <ul className='list'>
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
    </div>
  );
}

export default Resume;
