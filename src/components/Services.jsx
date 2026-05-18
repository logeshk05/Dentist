import { useEffect, useRef } from 'react';

function Services() {
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

  const handleAppointment = (e) => {
    e.preventDefault();
    const target = document.querySelector('#contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="services" id="services" ref={sectionRef}>
      <div className="services-container">
        <div className="services-content fade-in">
          <h2>Discover<br />The Dental Clinic</h2>
          <div className="accent-line"></div>
          <p>Our clients are our priority, we offer quality dental services with a team of specialists. More details about our services below.</p>
          <a href="#contact" className="btn-primary" onClick={handleAppointment}>Make Appointment</a>
        </div>
        <div className="services-grid fade-in">
          <div className="service-item">
            <div className="service-icon">
              <svg viewBox="0 0 64 64">
                <path d="M32 8c-8 0-14 6-14 14 0 8 6 16 14 24 8-8 14-16 14-24 0-8-6-14-14-14z"/>
                <rect x="28" y="12" width="8" height="12" rx="2"/>
                <path d="M24 28h16M28 32v8M36 32v8"/>
              </svg>
            </div>
            <span className="service-name">Implants</span>
          </div>
          <div className="service-item">
            <div className="service-icon">
              <svg viewBox="0 0 64 64">
                <circle cx="32" cy="24" r="12"/>
                <path d="M20 36c0 8 5.4 16 12 16s12-8 12-16"/>
                <path d="M28 20c2-4 6-4 8 0M26 28h12"/>
              </svg>
            </div>
            <span className="service-name">Gum Care</span>
          </div>
          <div className="service-item">
            <div className="service-icon">
              <svg viewBox="0 0 64 64">
                <path d="M32 8c-6 0-10 4-10 10v20c0 6 4 10 10 10s10-4 10-10V18c0-6-4-10-10-10z"/>
                <path d="M26 18h12M26 28h12"/>
                <path d="M32 8v40"/>
              </svg>
            </div>
            <span className="service-name">Root Canal</span>
          </div>
          <div className="service-item">
            <div className="service-icon">
              <svg viewBox="0 0 64 64">
                <rect x="16" y="12" width="32" height="40" rx="4"/>
                <circle cx="32" cy="28" r="8"/>
                <path d="M24 44h16"/>
                <path d="M28 48h8"/>
              </svg>
            </div>
            <span className="service-name">X-Ray</span>
          </div>
          <div className="service-item">
            <div className="service-icon">
              <svg viewBox="0 0 64 64">
                <path d="M32 8c-8 0-14 6-14 14 0 8 6 16 14 24 8-8 14-16 14-24 0-8-6-14-14-14z"/>
                <circle cx="32" cy="24" r="6" fill="var(--primary-blue)" stroke="none"/>
                <path d="M26 36l6 6 6-6"/>
              </svg>
            </div>
            <span className="service-name">Whitening</span>
          </div>
          <div className="service-item">
            <div className="service-icon">
              <svg viewBox="0 0 64 64">
                <circle cx="32" cy="32" r="20"/>
                <path d="M32 12v8M32 44v8M12 32h8M44 32h8"/>
                <circle cx="32" cy="32" r="8"/>
              </svg>
            </div>
            <span className="service-name">Prevention</span>
          </div>
          <div className="service-item">
            <div className="service-icon">
              <svg viewBox="0 0 64 64">
                <path d="M32 8c-6 0-10 4-10 10v12c0 6 4 10 10 10s10-4 10-10V18c0-6-4-10-10-10z"/>
                <path d="M28 18h8M26 24h12"/>
                <path d="M22 42c4 4 16 4 20 0"/>
              </svg>
            </div>
            <span className="service-name">Caries</span>
          </div>
          <div className="service-item">
            <div className="service-icon">
              <svg viewBox="0 0 64 64">
                <rect x="14" y="8" width="36" height="48" rx="4"/>
                <path d="M22 18h20M22 26h20M22 34h14"/>
                <circle cx="42" cy="40" r="4"/>
                <path d="M46 44l6 6"/>
              </svg>
            </div>
            <span className="service-name">Consultation</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
