import React from 'react';
import image from '../../../assets/images/about.jpg';

function About() {
  return (
    <div className="about-page wrapper">
      <h2 className='title'>About</h2>
        <div className='image-container-about'>
          <img className='about-image' src={image} alt='Craig' />
        </div>
      
      <p className='aboutMe'>
        Certificate in Full Stack Web Development from UT coding bootcamp with a
        strong background in surgical services and anesthesia. Coding skills in
        HTML, CSS, SASS, JavaScript, JQuery, Bootstrap, Handlebars, Node,
        Express, React, MongoDB, MySql, Sequelize, Git, and Linux commands. I
        have 20 years of experience in Surgery as a Certified Anesthesia
        Technician. My medical background will help me with web development
        because surgery is a fast-paced, time-sensitive environment with little
        room for error. Learning new processes and working with new technologies
        is taught with a ‘see one, do one, teach one’ mentality in surgery,
        helping me retain information through doing and teaching while still
        learning. Working closely with a team to maintain a clean and efficient
        workspace has taught me team-work, collaboration, and compromise. As a
        technician, I keep the anesthesia machines and devices in safe, working
        order. Keeping organized logs of all maintenance and safety checks that
        are performed and when they are due.{' '}
      </p>
    </div>
  );
}

export default About;
