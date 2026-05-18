import { useEffect, useRef } from 'react';

function About() {
  const sectionRef = useRef(null);

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

  return (
    <section className="welcome" id="about" ref={sectionRef}>
      <div className="welcome-container">
        <div className="welcome-image fade-in">
          <img
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Dr. Smile - Professional Dentist"
          />
        </div>
        <div className="welcome-content fade-in">
          <h2>A Warm<br />Welcome To<br />Our Clinic</h2>
          <div className="accent-line"></div>
          <p>Our clients are our priority, we offer quality dental services with a team of specialists. More details about our services below.</p>
          <p>We are committed to providing you with the highest standard of dental care in a comfortable and welcoming environment. Our state-of-the-art facility combines advanced technology with compassionate service.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
