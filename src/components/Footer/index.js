import React from 'react';
import github from '../../images/github.svg';
import linkedIn from '../../images/linkedIn.svg';
import stackOverflow from '../../images/stackOverflow.svg';

function Footer() {
  return (
    <footer className="App-footer">
      <div className="icons">
        <a
          href="https://github.com/CraigMJensen?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="Github" />
        </a>
      </div>
      <div className="icons">
        <a
          href="https://www.linkedin.com/in/craig-jensen-b6594594/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedIn} alt="LinkedIn" />
        </a>
      </div>
      <div className="icons">
        <a
          href="https://stackoverflow.com/users/16736205/craig-jensen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={stackOverflow} alt="Stack Overflow" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
