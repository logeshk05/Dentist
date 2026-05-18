import { Link, useLocation, useNavigate } from 'react-router-dom';

function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSectionClick = (e, sectionId) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const target = document.querySelector(sectionId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <footer className="footer">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div className="footer-logo">
          <div className="logo-icon"></div>
          <span className="logo-text">DENTIST</span>
        </div>
      </Link>
      <ul className="footer-links">
        <li><a href="#about" onClick={(e) => handleSectionClick(e, '#about')}>About Us</a></li>
        <li><a href="#services" onClick={(e) => handleSectionClick(e, '#services')}>Services</a></li>
        <li><a href="#contact" onClick={(e) => handleSectionClick(e, '#contact')}>Contact</a></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/appointments">Appointments</Link></li>
      </ul>
      <div className="footer-social">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-linkedin-in"></i></a>
      </div>
      <p className="footer-copy">&copy; 2026 Dentist Clinic. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
