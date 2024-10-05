import React from 'react';
import './ContactForm.scss'; // Assuming you have your styles in this file

const ContactForm = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h2>Contact us</h2>
        <p>
          Lorem ipsum dolor sit, consectetur adipisicing elit. Ex error est
          ullam reprehenderit in. Eum nisi dicta ex voluptas, illum ipsa blandit.
        </p>
        <form>
          <div className="form-row">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-row">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="form-row">
            <textarea placeholder="Your Message" rows="4" required></textarea>
          </div>
          <button type="submit">Send a Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
