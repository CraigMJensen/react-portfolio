import React from 'react';
import github from '../../assets/images/github.svg';
import linkedIn from '../../assets/images/linkedIn.svg';
import stackOverflow from '../../assets/images/stackOverflow.svg';

function Footer() {
  return (
    <footer className="App-footer">
      <a
        href="https://github.com/CraigMJensen"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="icons">
          <img src={github} alt="Github" />
        </div>
      </a>

      <a
        href="https://www.linkedin.com/in/craig-jensen-b6594594/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="icons">
          <img src={linkedIn} alt="LinkedIn" />
        </div>
      </a>

      <a
        href="https://stackoverflow.com/users/16736205/craig-jensen"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="icons">
          <img src={stackOverflow} alt="Stack Overflow" />
        </div>
      </a>
    </footer>
  );
}

export default Footer;
