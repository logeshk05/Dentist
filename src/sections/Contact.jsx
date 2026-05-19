import { useState, useEffect, useRef } from 'react';

function Contact() {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  useEffect(() => {
    const elements = sectionRef.current.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section className="contact" id="contact" ref={sectionRef}>
      <div className="contact-header fade-in">
        <h2>Contact Us</h2>
        <div className="accent-line"></div>
      </div>
      <div className="contact-container fade-in">
        <div className="contact-form">
          <h3>Contact Us</h3>
          <form id="contactForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name <span>*</span></label>
              <input type="text" name="name" placeholder="Your name here" required value={formData.name} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Email <span>*</span></label>
              <input type="email" name="email" placeholder="Your email here" required value={formData.email} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input type="tel" name="phone" placeholder="Your phone here" value={formData.phone} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea name="message" placeholder="Your message here..." value={formData.message} onChange={handleChange}></textarea>
            </div>
            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        </div>
        <div className="contact-info">
          <div className="info-item">
            <h4>Call</h4>
            <p>(03) 9147 3891</p>
          </div>
          <div className="info-item">
            <h4>Email</h4>
            <p><a href="mailto:hello@dentist.com">hello@dentist.com</a></p>
          </div>
          <div className="info-item">
            <h4>Visit</h4>
            <p>123 Dental Street<br />Melbourne, VIC 3000</p>
          </div>
          <div className="info-item">
            <h4>Hours</h4>
            <p>Mon - Fri: 8:00 AM - 6:00 PM<br />Sat: 9:00 AM - 2:00 PM</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
