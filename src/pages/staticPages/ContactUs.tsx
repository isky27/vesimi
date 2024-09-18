import React from 'react';
import "../../scss/contactUs.scss";

const ContactUs = () => {
  return (
    <div className="contact-container container mt-5">
      {/* Breadcrumb navigation */}
      <div className="row">
        <div className="col">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Header */}
      <div className="row contact-header text-center">
        <div className="col">
          <h1>Contact Us</h1>
          <p>Get in touch and we will be happy to help you</p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="row justify-content-center">
        <div className="col-md-8 contact-info">
          {/* Customer Care */}
          <h4>Customer Care</h4>
          <div className="contact-item">
            <i className="bi bi-whatsapp"></i>
            Whatsapp on at: 
            <a href="https://wa.me/919820082317" target="_blank" rel="noopener noreferrer">+91 9820082317</a>
          </div>

          {/* Business Information */}
          <h4>Business</h4>
          <p>Call us on:</p>
          <ul className="list-unstyled">
            <li className="contact-item">
              <i className="bi bi-telephone"></i> For Indian Users: 
              <a href="tel:+919820082317"> +91 9820082317</a> (Mon-Fri 11am-6pm IST)
            </li>
            <li className="contact-item">
              <i className="bi bi-telephone"></i> For International Users: 
              <a href="tel:+971526929312"> +971 526929312</a> (Mon-Sat 10am-8pm GMT +4)
            </li>
          </ul>

          {/* Email Us */}
          <h4>Email Us</h4>
          <div className="contact-item">
            <i className="bi bi-envelope"></i> 
            <a href="mailto:info@vesimi.com">info@vesimi.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
