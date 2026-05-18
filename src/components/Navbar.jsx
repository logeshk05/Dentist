import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionClick = (e, sectionId) => {
    e.preventDefault();
    setMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const target = document.querySelector(sectionId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  /* When navigating back to "/" with a scrollTo target */
  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      setTimeout(() => {
        const target = document.querySelector(location.state.scrollTo);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location]);

  const isSubPage = location.pathname !== '/';

  return (
    <nav className={`navbar${scrolled || isSubPage ? ' scrolled' : ''}`} id="navbar">
      <Link to="/" className="logo" style={{ textDecoration: 'none' }} onClick={() => setMenuOpen(false)}>
        <div className="logo-icon"></div>
        <span className="logo-text">DENTIST</span>
      </Link>
      <ul className={`nav-links${menuOpen ? ' active' : ''}`} id="navLinks">
        <li><a href="#about" onClick={(e) => handleSectionClick(e, '#about')}>About Us</a></li>
        <li><a href="#services" onClick={(e) => handleSectionClick(e, '#services')}>Services</a></li>
        <li><a href="#contact" onClick={(e) => handleSectionClick(e, '#contact')}>Contact Us</a></li>
        <li><Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link></li>
        <li><Link to="/appointments" onClick={() => setMenuOpen(false)}>Appointments</Link></li>
      </ul>
      <button
        className="mobile-menu-btn"
        id="mobileMenuBtn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </button>
    </nav>
  );
}

export default Navbar;
