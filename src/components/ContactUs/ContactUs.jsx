import React from 'react';
import './ContactUs.scss';

import phoneIcon from '../../images/icons/phone.svg';
import emailIcon from '../../images/icons/email.svg';
import uploadIcon from '../../images/icons/upload.svg';

const ContactUs = () => {
  const handleFileUploadClick = () => {
    document.getElementById('file-upload').click();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    console.log('Form Data:', formObject);

    alert('Form submitted successfully!');
    event.target.reset();
  };

  return (
    <div className="contact-us">
      <div className="contact-us__container">
        <div className="contact-us__info">
          <h2 className="contact-us__title">Contact us</h2>
          <p className="contact-us__description">
            Send us your request and we will get in touch with you as soon as possible.
          </p>
        </div>

        <div className="contact-us__details">
          <div className="contact-us__detail">
            <img src={phoneIcon} alt="Phone" className="contact-us__icon" />
            <a href="tel:+380987828223" className="contact-us__link">+380 98 782 82 23</a>
          </div>
          <div className="contact-us__detail">
            <img src={emailIcon} alt="Email" className="contact-us__icon" />
            <a href="mailto:mailmail@gmail.com" className="contact-us__link">mailmail@gmail.com</a>
          </div>
        </div>

        <form className="contact-us__form" onSubmit={handleSubmit}>
          <label htmlFor="name" className="contact-us__label">Name</label>
          <input type="text" id="name" name="name" className="contact-us__input contact-us__input--name" placeholder="Your name" required />
          
          <label htmlFor="email" className="contact-us__label">E-mail</label>
          <input type="email" id="email" name="email" className="contact-us__input contact-us__input--email" placeholder="Your email" required />
          
          <label htmlFor="message" className="contact-us__label">Message</label>
          <textarea id="message" name="message" className="contact-us__textarea contact-us__textarea--message" placeholder="Your message" required></textarea>
          
          <div className="contact-us__upload">
            <img src={uploadIcon} alt="Upload" className="contact-us__icon contact-us__icon--upload" />
            <label htmlFor="file-upload" className="contact-us__upload-label" onClick={handleFileUploadClick}>
              <span className="contact-us__upload-span">Upload photos</span> (No more than 3 photos. Format: JPG, PNG)
            </label>
            <input type="file" id="file-upload" className="contact-us__file" multiple accept="image/jpg, image/png" style={{ display: 'none' }} />
          </div>

          <div className="contact-us__submit-container">
            <button type="submit" className="contact-us__submit">Send request</button>
            <p className="contact-us__policy">
              By sending a request you agree to our <a href="/privacy-policy" className="contact-us__policy-link">Privacy & Policy</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;