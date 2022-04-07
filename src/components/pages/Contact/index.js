import React, { useState } from 'react';
import { validateEmail } from '../../../utils/helpers';

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required.`);
        } else {
          setErrorMessage('');
        }
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.value]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    // send(
    //   'SERVICE ID',
    //   'TEMPLATE ID',
    //   toSend,
    //   'User ID'
    // )
    //   .then((response) => {
    //     console.log('SUCCESS!', response.status, response.text);
    //   })
    //   .catch((err) => {
    //     console.log('FAILED...', err);
    //   });
  }

  return (
    <section className="wrapper">
      <h2 data-testid="h1" className="title">
        Contact me
      </h2>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name"></label>
          <input
            placeholder="Name:"
            type="text"
            name="name"
            onBlur={handleChange}
            onFocus={name}
          />
        </div>
        <div>
          <label htmlFor="email"></label>
          <input
            placeholder="Email:"
            type="email"
            name="email"
            onBlur={handleChange}
            onFocus={email}
          />
        </div>
        <div>
          <label htmlFor="message"></label>
          <textarea
            placeholder="Enter message here..."
            name="message"
            rows="5"
            onBlur={handleChange}
            onFocus={message}
          />
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
        </div>
        <button type="submit" data-testid="button">
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
