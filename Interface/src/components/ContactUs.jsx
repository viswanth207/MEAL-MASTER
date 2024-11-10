import React, { useState } from 'react';
import './css/ContactUs.css';

const ContactUs = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      alert('Your message has been submitted!');
      setMessage('');
    } else {
      alert('Please enter a message.');
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We are here to help you! Reach out to us for any queries, suggestions, or feedback.</p>
      </div>
      <div className="contact-content">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>Feel free to contact us for any questions or suggestions. We value your feedback!</p>
          <ul>
            <li>
              <strong>Phone:</strong> <a href="tel:+919177064159">+91 9177064159</a>
            </li>
            <li>
              <strong>Email:</strong> <a href="mailto:Vignan@gmail.com">Vignan@gmail.com</a>
            </li>
          </ul>
        </div>
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message here..."
              rows="6"
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
