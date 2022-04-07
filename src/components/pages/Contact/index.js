import React, { useState } from 'react';
import { validateEmail } from '../../../utils/helpers';
import { send } from 'emailjs-com';

function Contact() {
  const [errorMessage, setErrorMessage] = useState('');

  const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
    reply_to: '',
  });

  function handleChange(e) {
    if (e.target.id === 'name') {
      if (e.target.value === '') {
        setErrorMessage('You must enter a name.');
      } else {
        setErrorMessage('');
      }
    }

    if (e.target.id === 'email') {
      const isValid = validateEmail(e.target.value);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.id} is required.`);
        } else {
          setErrorMessage('');
        }
      }
    }

    if (e.target.id === 'message') {
      if (e.target.value === '') {
        setErrorMessage('You must enter a message.');
      } else {
        setErrorMessage('');
      }
    }

    if (!errorMessage) {
      setToSend({ ...toSend, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    send('service_xb918as', 'template_dqn6h9r', toSend, '1A0DYHbHvH50Yv71j')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  }

  const [text, enableButton] = useState('');

  const handleTextChange = (e) => {
    enableButton(e.target.value);
  };

  return (
    <section className="wrapper">
      <h2 data-testid="h1" className="title">
        Contact me
      </h2>
      <form id="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="from_name"
          placeholder="Your name"
          onBlur={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="reply_to"
          placeholder="Your email"
          onBlur={handleChange}
        />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your message here..."
          onBlur={handleChange}
          onChange={handleTextChange}
        />
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}

        <button type="submit" data-testid="button" disabled={!text}>
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
