import React from 'react';
import image from '../../../assets/images/about.jpg';

function About() {
  return (
    <div className="about-page wrapper">
      <h2 className="title">About</h2>
      <div className="image-container-about">
<<<<<<< HEAD
        <img className="about-image" src={image} alt="Craig" />
=======
        <a
          href="https://github.com/CraigMJensen"
          target="_blank"
          rel="noreferrer"
        >
          <img className="about-image" src={image} alt="Craig" />
        </a>
>>>>>>> 69c4fb82817a698346eab3320d5b16e671dabf0b
      </div>

      <p className="aboutMe">
        Certificate in Full Stack Web Development from UT coding bootcamp with a
        strong background in surgical services and anesthesia. Hands-on
        experience building user-focused applications using HTML, CSS,
        JavaScript, MySQL, MongoDB, Express, React, Node.js and more. Abilities
        to quickly learn new skills, respond quickly and effectively to
        emergencies, and staying calm under pressure will aid me in the
        fast-paced world of web development.{' '}
      </p>
      <p className="email-link">
        Email me @{' '}
        <a href="mailto:CMJensen82@gmail.com">CMJensen82@gmail.com</a>
      </p>
    </div>
  );
}

export default About;
